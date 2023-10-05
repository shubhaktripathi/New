import {LightningElement, wire, track, api} from 'lwc';
import CarRecords from '@salesforce/apex/DisplayCarRecordClass.CarRecords';
import {createRecord} from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {publish, MessageContext} from 'lightning/messageService';
import Booking_Updated_channel
  from '@salesforce/messageChannel/Booking_Updated__c';

const columns = [
  {label: 'Car_Name__c', fieldName: 'Car_Name__c'},
  {label: 'Car_Model__c', fieldName: 'Car_Model__c'},
  {label: 'Car_Type__c', fieldName: 'Car_Type__c'},
  {label: 'Price__c', fieldName: 'Price__c'},
  {
    label: 'Book Car',
    type: 'button',
    typeAttributes: {
      label: 'BOOK',
      name: 'saveRecord',
      title: 'BookCar',
      variant: 'brand',
    },
  },
];

export default class CarSearchTable extends LightningElement {
  @wire (MessageContext)
  messageContext;

  availableAccounts;
  error;
  columns = columns;
  searchString;
  initialRecords;
  @track startDate; // for store start date
  @track endDate; // for store end date

  @wire (CarRecords)
  wiredAccount({error, data}) {
    if (data) {
      this.availableAccounts = data;
      this.initialRecords = data;
    } else if (error) {
      this.error = error;
    }
  }
  buttonClick () {
    alert ('this is button of the datatable');
  }
  handledate (event) {
    if (event.target.name === 'startdate') {
      this.startDate = event.target.value;
    }
    if (event.target.name === 'EndDate') {
      this.endDate = event.target.value;
    }
  }
  // method for car booking
  butttonClick (event) {
    if (this.startDate != null || this.endDate != null) {
      //alert(this.startDate);
      //alert(this.endDate);
      const row = event.detail.row; // using [event.detail.row] we can get row values eg. record and record field
      //alert(row.Id);
      console.log (JSON.stringify (event.detail.row));

      let fields = {
        Booking_Start_Date__c: this.startDate,
        Booking_End_Date__c: this.endDate,
      };
      let carBookingObj = {
        apiName: 'Car_Booking__c',
        fields: fields,
      };
      console.log (JSON.stringify (carBookingObj));

      createRecord (carBookingObj);

      const evt = new ShowToastEvent ({
        title: 'Thank You',
        message: 'You Have Successfully Book Your Car',
        variant: 'Success',
      });
      this.dispatchEvent (evt);
    } else if (this.startDate == null || this.endDate == null) {
      alert ('Plese fill bookking dates');
    }
    const payload = {
      BookingId: 'B-0003',
      BookingStartDate: 'Sep 6, 2023',
      BookingEndDate: 'Sep 16, 2023',
    };
    console.log ('payload is'+payload);
    publish (this.messageContext, Booking_Updated_channel, payload);
  }

  handleSearchChange (event) {
    this.searchString = event.detail.value;
    console.log ('Updated Search String is ' + this.searchString);
  }

  handleSearch (event) {
    console.log ('handlesearchevent');

    const searchKey = event.target.value.toLowerCase ();
    console.log ('Search String is ' + searchKey);

    if (searchKey) {
      this.availableAccounts = this.initialRecords;
      console.log (
        'Account Records are ' + JSON.stringify (this.availableAccounts)
      );

      if (this.availableAccounts) {
        let recs = [];

        for (let rec of this.availableAccounts) {
          console.log ('Rec is ' + JSON.stringify (rec));
          let valuesArray = Object.values (rec);

          console.log ('valuesArray is ' + JSON.stringify (valuesArray));

          for (let val of valuesArray) {
            console.log ('val is ' + val);
            let strVal = String (val);

            if (strVal) {
              if (strVal.toLowerCase ().includes (searchKey)) {
                recs.push (rec);
                break;
              }
            }
          }
        }

        console.log ('Matched Accounts are ' + JSON.stringify (recs));
        this.availableAccounts = recs;
      }
    } else {
      this.availableAccounts = this.initialRecords;
    }
  }
}
