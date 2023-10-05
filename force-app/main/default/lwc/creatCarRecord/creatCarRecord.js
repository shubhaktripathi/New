import { LightningElement , wire ,track ,api} from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import Car_Type__c from "@salesforce/schema/Car_Details__c.Car_Type__c";


export default class CreatCarRecord extends LightningElement {
    @track value ;
    @track dataStore ;
    @track errorstore ;

    CarName1;
    CarModel1;
    CarPrice1;

    @wire(getPicklistValues ,{

        recordTypeId : '012000000000000AAA',
        fieldApiName : Car_Type__c ,
    })
    wirePicklistMethod({data ,error}){
        if(data){
         this.dataStore = data.values ;
         console.log('picklist' + data.values) ;
        }
       else if(error){
        this.errorstore = error ;
        }

    }

    
    handleCarDetails(event){
    if(event.target.name=== 'CarName'){
        this.CarName1=event.target.value;

     } else if(event.target.name==='CarModel')
     {
        this.CarModel1=event.target.value;

    }else if(event.target.name==='CarPrice')
    {
       this.CarPrice1=event.target.value;

   }
   else if(event.target.name==='carType')
    {
       this.value=event.target.value;

   }


    }
    handleCarClick(){
        console.log(this.CarPrice1);

        let fields ={
            'Name' : this.CarName1,
            'Car_Model__c' : this.CarModel1 ,
            'Price__c' : this.CarPrice1 ,
            'Car_Type__c' : this.value

        }
        let carObject =
        {
         "apiName" : "Car_Details__c" ,
         'fields' :  fields,

        }
        createRecord(carObject);

    }



}