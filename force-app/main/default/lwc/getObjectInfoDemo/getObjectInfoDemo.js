import { LightningElement,wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import CONTACT from '@salesforce/schema/Contact';

export default class GetObjectInfoDemo extends LightningElement {
    objectInfoResult
    @wire(getObjectInfo,{objectApiName:CONTACT}) 
    objectInfo({data,error}){
        if(data){
            console.log(data);
            this.objectInfoResult=data.defaultRecordTypeId;
            this.objectInfoResult1=data.apiName;
        }
    }
}