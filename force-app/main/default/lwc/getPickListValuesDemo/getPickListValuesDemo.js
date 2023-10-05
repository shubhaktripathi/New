import { LightningElement, wire } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class GetPickListValuesDemo extends LightningElement {
    result;
    result1;
    obj;
    pickListvalue;
    // @wire(getObjectInfo, { objectApiName: ACCOUNT })
    // contactResult
    //({ data, error }) {
    //     if (data) {
    //         console.log(data);
    //         this.obj=data;
    //     }
    //     else {
    //         console.log(error);
    //     }
    // }

    @wire(getPicklistValues, {
        recordTypeId: '012000000000000AAA',
        fieldApiName: INDUSTRY_FIELD
    })
    picklistValues({ data, error }) {
        if (data) {
            this.result = data;
            console.log(data);
        }
        else {
            console.log('error1 is ' + error);
        }
    }



    handleChange(event) {
        //  this.pickListvalue = event.target.value;
        //  console.log(this.pickListvalue);

    }
}