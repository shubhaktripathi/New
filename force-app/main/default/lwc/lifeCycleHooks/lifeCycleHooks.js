import { LightningElement, track } from 'lwc';

export default class LifeCycleHooks extends LightningElement {

    message = 'Updated count will appear here!';
    show = true;

    constructor() {
        super();
        console.log('Parent constructor called');
    }

    connectedCallback() {
        console.log('Parent connected callback called');
        console.log(this.template.querySelector('c-child'));
    }

    renderedCallback() {
        console.log('Parent rendered callback called');
        console.log(this.template.querySelector('c-child'));
    }

    errorCallback(error, stack) {
        console.log('Parent error callback called, error = ' + JSON.stringify(error) + ', stack = ' + stack);
        console.log(this.template.querySelector('c-child'));
    }

    updateMessage(event) {
        this.message = event.detail.message;
    }

    toggleChild() {
        this.show = !this.show;
    }
}