import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT from '@salesforce/schema/Account';
import NAME from '@salesforce/schema/Account.Name';
import PHONE from '@salesforce/schema/Account.Phone';
import TYPE from '@salesforce/schema/Account.Type';
export default class CreateRecordUiApi extends LightningElement {

    formsfields={
        name:NAME,
        type: TYPE,
        Phone:PHONE
    }
    handleClick()
    {
        const fields={};
        fields[NAME.fieldApiName] = this.formsfields.name
        fields[PHONE.fieldApiName] = this.formsfields.Phone
       // fields[TYPE.fieldApiName] = this.formsfields.type
         let recordInput = { apiName: ACCOUNT.objectApiName, fields}
    createRecord(recordInput).then(result=>{
        this.formsfields={};
        console.log("account is created", JSON.stringify(result.id));
    }).catch(error=>{
        console.log(error);
    })
    }

    changeHandler(event){
    //advance method
    //const{value,name}=event.target;
    //this.formsfields={...this.formsfields,[name]:value};
        if(event.target.name==='Name'){
            this.formsfields.name=event.target.value;
        }
        else if (event.target.type==='type'){
            this.formsfields=event.target.value;
        }
        else{
            this.formsfields.Phone=event.target.value;
        }
console.log(this.formsfields);
    }
}