import { LightningElement ,wire ,track ,api } from 'lwc';
import classMethod from '@salesforce/apex/fisrtapexlwc.classMethod';
export default class DisplayRecordComp extends LightningElement 
{
    @track recordList ;
    @track erroR ;;


 @wire(classMethod) dataInThisMethod({
    error ,data
 }){
 if(data){
   this.recordList=data;
 }
 else if(error){
    this.erroR = error;
 }
}


}