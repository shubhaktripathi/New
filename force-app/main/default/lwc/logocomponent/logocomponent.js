import { LightningElement,wire,track } from 'lwc';
import ACT_LOGO_transparent from '@salesforce/resourceUrl/act_logo';
import { subscribe, MessageContext, } from 'lightning/messageService';
import SampleMessageChannel from '@salesforce/messageChannel/SampleMessageChannel__c';

export default class LogoComponent2 extends LightningElement {
    logotransparent=ACT_LOGO_transparent;
   @track logocolor;


    @wire(MessageContext)
    MessageContext;

    connectedCallback() {
        this.subscribeToMessageChannel();
        console.log("connectedcallback");
    }
    subscribeToMessageChannel() {
        this.subscription = subscribe(
            this.MessageContext,
            SampleMessageChannel,
            (message) => this.handleMessage(message)
        );
    }

    handleMessage(message) {
        console.log("1");
        console.log("message" + JSON.stringify(message));
      
    //     if (message.Operator == 'add') {
    //         this.counter += message.Constant;
    //     }
    //     else if (message.Operator == 'substract') {
    //         this.counter -= message.Constant;
    //     }
    //     else if (message.Operator == 'multiply') {
    //         this.counter *= message.Constant;
    //     }
    // }
    console.log('this is from subscriber 1  ' + this.logocolor);
    this.logocolor=message.logocolor;
    console.log('this is from subscriber  2' + this.logocolor);

}

}