import { LightningElement , wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';

export default class ParentPublisher extends LightningElement 
{
     @wire (CurrentPageReference) pageRef;
    handleChange(event){
        
        fireEvent(this.pageRef ,"parentPublisher",event.target.value);

    }
}