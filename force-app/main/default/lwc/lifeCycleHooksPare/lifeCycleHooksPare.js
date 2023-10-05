import { LightningElement, track } from 'lwc';

export default class LifeCycleHooksPare extends LightningElement {

    message = 'Updated count will appear here!';
    show = true;

    render(){

    }
    
    constructor() {
        //only able to access the value of private property
        super();
        console.log('Parent constructor called');
    }

    connectedCallback() {
        //you cannot access child components from connectedCallback() of parent
        //This callback is invoked after all the public properties are set
        //connectedCallback() can only access the INITIAL VALUES OF PUBLIC PROPERTIES 
        //You can perform some initialization tasks in the connectedCallback() like:
        // listening for events or getting some initial data from the server
        console.log('Parent connected callback called');
        console.log('tempalate in parent '+this.template.querySelector('c-life-cycle-hooks-child'));
        console.log('tempalate in parent '+this.template.querySelector('lightning-button'));

    }

   
    renderedCallback() {
        //renderedCallback() on the child component is called before it's called on the parent component
        console.log('Parent rendered callback called');
        console.log(this.template.querySelector('c-life-cycle-hooks-child'));
    }

    errorCallback(error, stack) {
        console.log('Parent error callback called, error = ' + JSON.stringify(error) + ', stack = ' + stack);
        console.log(this.template.querySelector('c-life-cycle-hooks-child'));
    }

    updateMessage(event) {
        this.message = event.detail.message;
    }

    toggleChild() {
        this.show = !this.show;
    }
}