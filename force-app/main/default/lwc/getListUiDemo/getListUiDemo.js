import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';


export default class GetListUiDemo extends LightningElement {
    conResult;

    @wire(getListUi, {
        objectApiName: CONTACT_OBJECT,
        listViewApiName: 'MyContacts'

    }) wiredListView({ error, data }) {
        if (data) {
            console.log(data);
            this.conResult = data.records.records;
        }
        else {
            console.log(error);
        }
    }

}