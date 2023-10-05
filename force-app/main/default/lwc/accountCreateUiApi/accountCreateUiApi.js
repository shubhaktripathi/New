/* eslint-disable eqeqeq */
import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import { createRecord } from 'lightning/uiRecordApi';

export default class AccountCreateUiApi extends LightningElement {
    name='';
    AnnualRevenue='';
    //objectApiName='Account';
    handleChange(event){
        if(event.target.label=='Name'){
            this.name =  event.target.value;
        }
        if(event.target.label=='AnnualRevenue'){
            this.AnnualRevenue = event.target.value;
        }
    }
    createAccount(){
        const fields = {};
        console.log('f1 is '+JSON.stringify(fields))
        fields.NAME_FIELD.fieldApiName = this.name;
        fields[PHONE_FIELD.fieldApiName] = this.AnnualRevenue;
        console.log('f2 is '+JSON.stringify(fields))
        const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };
        createRecord(recordInput)
        .then(account => {
            this.accountId = account.id;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Account created',
                    variant: 'success',
                }),
            );
            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes: {
                    recordId: account.id,
                    objectApiName: 'Account',
                    actionName: 'view'
                },
            });



        })
        .catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating record',
                    message: error.body.message,
                    variant: 'error',
                }),
            );
        });
    }
}