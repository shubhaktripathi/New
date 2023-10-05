import SystemModstamp from '@salesforce/schema/Account.SystemModstamp';
import { LightningElement } from 'lwc';

export default class GetterDemo extends LightningElement {
    title='This is getter Demo';
    text;
    Status='box_red';
    selectedbtn='off';
   get getTitle(){
        return this.title.toUpperCase();
    }

    get boxStatus(){
        console.log(this.Status);
        return this.selectedbtn==='on'? "box_green": "box_red";
       
    }

    clickHanlder(event){
    //this.selectedbtn=event.target.innerText;
    this.selectedbtn=event.target.label;
    console.log(this.selectedbtn)
}
}