import { LightningElement } from 'lwc';

export default class TwoWayDataBinding extends LightningElement {
    name="Shubham";
    clickHandler(event){
        this.name=event.target.value;
    }

}