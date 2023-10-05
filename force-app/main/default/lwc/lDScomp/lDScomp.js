import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

export default class LDScomp extends LightningElement {

    accountName;
    accountPhone;
    handleAccountDetails(event){
        if (event.target.name==="AccountName"){
            this.accountName=event.target.value;
        }

        else if(event.target.name==="AccountPhone"){
            this.accountPhone=event.target.value;}


    }
    handleAccountClick(event){
        console.log('this.accountName---->'+this.accountName);
        console.log('this.accountPhone---->'+this.accountPhone);

       let fields = { 
            'Name':this.accountName,
            'Phone':this.accountPhone

            }
        
        let record = {
            "apiName":"Account",
            'fields' :fields
            
        }
        createRecord(record).then(x=>{
            console.log(x);
        }).catch(err=>{
            console.log(err);
        })



    }
}