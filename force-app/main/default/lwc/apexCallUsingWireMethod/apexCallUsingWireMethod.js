import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccList';
import getSearchAccount from '@salesforce/apex/AccountController.getAccList1';

export default class ApexCallUsingWireMethod extends LightningElement {
    accountName;
    Accounts;
    error;
    searchKey = null;

    @wire(getAccountList)
    wiredContact;

    @wire(getSearchAccount,{ name: '$searchKey' })
    wiredAccount({data, error }) {
        if(data){
            this.Accounts = data;
            console.log(JSON.stringify(this.Accounts));
        }
        else {
            this.error = error;
        }
    }
    handleClick(event) {
        this.searchKey = event.target.value;
        console.log(this.searchKey);
    }

}