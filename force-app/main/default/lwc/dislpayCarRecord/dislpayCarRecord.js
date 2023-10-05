import { LightningElement, wire ,api,track } from 'lwc';
import carRecords from '@salesforce/apex/DisplayCarRecordCls.carRecords';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { CurrentPageReference } from "lightning/navigation"; //that for 3rd comp
import { fireEvent } from 'c/pubsub'; //that for 3rd comp

const columns = [   
    { label: 'Name', fieldName: 'Name' },
    { label: 'Car_Model__c', fieldName: 'Car_Model__c' },
   { label: 'Car_Type__c', fieldName: 'Car_Type__c' },
    { label: 'Price__c/24hr', fieldName: 'Price__c' },
     { label: 'Car_Image__c', fieldName: 'Car_Image__c ' , type:'image' },
    {  label: 'Book Car', type: 'button', typeAttributes: {  label: 'BOOK', name: 'saveRecord', title: 'BookCar' , variant : 'brand' } }
    
];

export default class dislpayCarRecord extends LightningElement {
     
    availableAccounts;
    error;
    columns = columns;
    searchString;
    initialRecords;
    @track startDate // for store start date
    @track endDate // for store end date

    @wire (CurrentPageReference) pageRef;
    @wire( carRecords )  
    wiredAccount( { error, data } ) {

        if ( data ) {

            this.availableAccounts = data;
            this.initialRecords = data;
            

        } else if ( error ) {

            this.error = error;
           

        }

    }
    // date input method
    handledate(event){ 
        if(event.target.name==='startdate'){
        this.startDate =event.target.value;
    }
    if(event.target.name==='EndDate'){
        this.endDate =event.target.value;
    }



    }
    // method for car booking
    butttonClick(event){
        if(this.startDate != null || this.endDate!=null){
     
        const  row = event.detail.row; // using [event.detail.row] we can get row values eg. record and record field
        
      // alert( JSON.stringify(event.detail.row));

       let fields= {
          
            'BookingStartDate__c': this.startDate,
        'BookingEndDate__c':this.endDate,
       }
       let carBookingObj =
       {
        "apiName" : "CarBookings__c" ,
        'fields' :  fields,
 
       }
       createRecord(carBookingObj);
      // alert(JSON.stringify(carBookingObj));
       const evt = new ShowToastEvent({
        title: 'Thank You',
        message: 'You Have Successfully Book Your Car',
        variant: 'Success',
      });
      this.dispatchEvent(evt);
      var reomoveRow = event.detail.row.Id;
      if(reomoveRow){
        reomoveRow.remove();

      }
      }
      else if(this.startDate == null || this.endDate ==null)
      {
       alert('Plese fill bookking dates');
      }
           //alert(JSON.stringify(event.detail.row));
      fireEvent(this.pageRef , "parentPublisger" , event.detail.row);

    }


    

    handleSearchChange( event ) {

        this.searchString = event.detail.value;
        console.log( 'Updated Search String is ' + this.searchString );

    }

    handleSearch( event ) {

        const searchKey = event.target.value.toLowerCase();
        console.log( 'Search String is ' + searchKey );

        if ( searchKey ) {

            this.availableAccounts = this.initialRecords;
            console.log( 'Account Records are ' + JSON.stringify( this.availableAccounts ) );
            
            if ( this.availableAccounts ) {

                let recs = [];
                
                for ( let rec of this.availableAccounts ) {

                    console.log( 'Rec is ' + JSON.stringify( rec ) );
                    let valuesArray = Object.values( rec );
                    console.log( 'valuesArray is ' + JSON.stringify( valuesArray ) );
 
                    for ( let val of valuesArray ) {

                        console.log( 'val is ' + val );
                        let strVal = String( val );
                        
                        if ( strVal ) {

                            if ( strVal.toLowerCase().includes( searchKey ) ) {

                                recs.push( rec );
                                break;
                        
                            }

                        }

                    }
                    
                }

                console.log( 'Matched Accounts are ' + JSON.stringify( recs ) );
                this.availableAccounts = recs;

             }
 
        }  else {

            this.availableAccounts = this.initialRecords;

        }        

    }

}