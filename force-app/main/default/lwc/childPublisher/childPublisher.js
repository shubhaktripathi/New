import { LightningElement,wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation' ;
import { registerListener } from 'c/pubsub';

 
export default class ChildPublisher extends LightningElement {

    viewMessage='';

    @wire (CurrentPageReference) pageRef;

    connectedCallback(){

        registerListener("parentPublisher" ,this.showDetails ,this);

    }
    showDetails(data){
          this.viewMessage=data;
    }




}