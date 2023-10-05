import {LightningElement, wire} from 'lwc';
import {subscribe, MessageContext} from 'lightning/messageService';
import Booking_Updated_channel
  from '@salesforce/messageChannel/Booking_Updated__c';

export default class BookingSubComponent extends LightningElement {
  values;
  subscription;
  resultArray;
  @wire (MessageContext)
  messageContext;

  connectedCallback () {
    console.log ('connected callback');
    this.subscribeToMessageChannel ();
  }
  subscribeToMessageChannel () {
    this.subscription = subscribe (
      this.messageContext,
      Booking_Updated_channel,
      message => this.handleMessage (message)
    );
  }
  handleMessage (message) {
    console.log ('message1:' + JSON.stringify (message));
    this.values =  (message)
    console.log ('arr2 is ' +  this.resultArray);
    this.resultArray = [this.values];
    
    
  }
}
