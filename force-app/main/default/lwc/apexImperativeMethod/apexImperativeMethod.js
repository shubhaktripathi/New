import { LightningElement } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class ApexImperativeMethod extends LightningElement {
    contacts;
    contact;
    error;

    handleLoad() {
        console.log('1');
        getContactList()
            .then((result) => {
                this.contact=true;
                this.contacts = result;
                console.log('2',this.contacts);
                this.error = undefined;
            })
            .catch((error) => {
                this.error = error;
                this.contacts = undefined;
            });
    }
}