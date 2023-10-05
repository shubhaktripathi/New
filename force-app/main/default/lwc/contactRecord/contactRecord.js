import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';


export default class ContactRecord extends LightningElement {
   
    ConLastname;
    Conphone;

    condetails(event){
        if (event.target.name==="Lastname"){
            this.ConLastname=event.target.value;
        }

        else if(event.target.name==="ConPhone"){
            this.Conphone=event.target.value;
        }
    }
    CreatContactRecord(event){
        console.log('this.accountName---->'+this.ConLastname);
        console.log('this.accountPhone---->'+this.Conphone);

    let fields ={
        'LastName': this.ConLastname,
        'MobilePhone': this.Conphone

    }
    let record ={
        "apiName" : "Contact",
        'fields' : fields
        
    }
    createRecord(record).then(x=>{
        console.log(x);
    }).catch(err=>{
        console.log(err);
    });
    }


    
  
}