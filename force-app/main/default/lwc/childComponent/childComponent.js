import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api name;
    @api lastName;
    @api userDetails;
    @api percentage;
}