import { LightningElement } from 'lwc';
import clsMethod from '@salesforce/apex/DisplayCarRecordCls.clsMethod';

const columns = [   
    { label: 'Name', fieldName: 'Name' },
    { label: 'Car_Model__c', fieldName: 'Car_Model__c' },
   { label: 'Car_Type__c', fieldName: 'Car_Type__c' },
    { label: 'Price__c/24hr', fieldName: 'Price__c' }, ];
export default class PassParameterToApex extends LightningElement {
columns = columns;
searchWord='';
accounts;
error;
    handleSearch(event){

    this.searchWord=event.target.value;
    clsMethod({compvalue : this.searchWord})
   .then(result =>{
    this.accounts=result; 
   })
   .catch(error=>{

    this.error=error;
   })

    }
}