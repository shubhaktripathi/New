import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

export default class createRecordAshi extends LightningElement {

    accountName;
    accountPhone;
    AccountInd;
    button='create Account';
    val=''
    obj={
        age:10
    }

    handleAccountDetails(event){
        console.log('event.target.name' + event.target.name);
        
        if (event.target.name==="AccountName"){
            console.log('name is '+event.target.value);
            this.accountName=event.target.value;
            this.val=this.val+10
            console.log('value is '+this.val);
             this.obj.age+=10
             console.log('obj is '+ this.obj.age);
        }

        else if(event.target.name==="AccountPhone"){
            console.log('phone is '+event.target.value);

            this.accountPhone=event.target.value;}


    
    
    else if(event.target.name==="AccountInd"){
        console.log('phone is '+event.target.value);

        this.AccountInd=event.target.value;
    }


}

    // handleAccountDetails1(event){
    //     this.accountPhone=event.target.value;
    // }
    handleAccountClick(event){
        console.log('this.accountName---->'+this.accountName);
        console.log('this.accountPhone---->'+this.accountPhone);

       let fields = { 
            'Name':this.accountName,
            'AnnualRevenue':this.accountPhone

            }
        
        let record = {
            "apiName":"Account",
            'fields' :fields
            
        }
        createRecord(record).then(x=>{
            console.log(x);
            this.button='Account is created';

        }).catch(err=>{
            console.log('error is'+err);
        })



    }
}