import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class AmrActivity extends NavigationMixin(LightningElement) {
    display = false;

    clickHandler(){
        this.display = true;
    }

    clickHandler1(){
        this.display = false;
    }

    next7(){

        //var x1 = btoa((JSON.stringify(def1)));
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                //url:'/one/one.app#'+x
                url:'https://pwc-2e7-dev-ed.lightning.force.com/lightning/n/Contact_details'
            }
        });
    }

    back7(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                //url:'/one/one.app#'+x
                url:'https://pwc-2e7-dev-ed.lightning.force.com/lightning/n/Evidence'
            }
        });
    }
}