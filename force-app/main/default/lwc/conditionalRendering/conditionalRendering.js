import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    buttonName = 'click to show';
    text = false;
    clickHandler(event) {
        this.buttonName = this.buttonName === 'click to show' ? this.buttonName = 'Hide text' 
        : this.buttonName === 'Hide text' ? this.buttonName = 'Click to show': this.buttonName ='Click to show';
        this.text = !this.text;
    }
}