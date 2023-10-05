import { LightningElement ,track,wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation' ;
import { registerListener } from 'c/pubsub';


export default class BookCars extends LightningElement
 {
    //columns=columns;
    @track bookings;
    bookCar;
    @wire (CurrentPageReference) pageRef;

    

    connectedCallback(){

        registerListener("parentPublisger", this.showRecords ,this);
        
    }

    showRecords(data){
        console.log(data);
        console.log('B1 is ' +  this.bookings);
        this.bookings=(data)
        this.bookCar=[this.bookings]
        
        //alert(' this is response from parent through the pubsubg'+JSON.stringify(this.bookings));

    }


    
}