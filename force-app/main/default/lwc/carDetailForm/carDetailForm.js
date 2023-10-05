import { LightningElement ,wire,track} from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import 	Car_Type__c from '@salesforce/schema/Car__c.Car_Type__c';


export default class CarDetailForm extends LightningElement {
   @track value;
   @track datastore;
   @track errorstore;

    carName;
    carModel;  
    carPrice;
  

    @wire(getPicklistValues,{
        recordTypeId:'012000000000000AAA',
        fieldApiName:Car_Type__c
    })

    wirePicklistMethod({data,error}){
        if(data){
            this.datastore= data.values;
            console.log('picklist values are'+data.values);
        }
        else if(error){
            this.errorstore=error;
        }
    }
    handleCarDetails(event){
        if (event.target.name==="CarName"){
            this.carName=event.target.value;
        }

        else if(event.target.name==="CarModel"){
            this.carModel=event.target.value;}

            else if(event.target.name==="CarType"){
                this.value=event.target.value;}

                else if(event.target.name==="CarPrice"){
                    this.carPrice=event.target.value;}


    }
    handleCarClick(event){
        console.log('this.CarName---->'+this.carName);
        console.log('this.carmodel---->'+this.carModel);
        console.log('this.carType---->'+this.value);
        console.log('this.carPrice---->'+this.carPrice);

       let fields = { 
            'Car_Name__c':this.carName,
            'Car_Model__c':this.carModel,
            'Car_Type__c':this.carType,
            'Price__c':this.carPrice

            }
        
        let record = {
            "apiName":"Car__c",
            'fields' :fields
            
        }
        createRecord(record).then(x=>{
            console.log(x);
        }).catch(err=>{
            console.log(err);
        })



    }
}