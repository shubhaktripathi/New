import { LightningElement } from 'lwc';

export default class Forthcmp extends LightningElement {
    
    subject= "";
JSmethod(e){
    
    console.log(e.target.label);
    this.subject=e.target.value;


}



}