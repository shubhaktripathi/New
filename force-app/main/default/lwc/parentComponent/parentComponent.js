import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    name = 'Shubham';
    lastName = 'tripathi';
    percentage=10;

    userDetails = [{
        name: "shubham",
        id: 1416
    },
    {
        name: "Vaibhav",
        id: 14167
    },
    ]


    changeHandler(event){
        this.percentage=event.target.value;
    
    }

    changeColor() {
        this.template.querySelector('c-bar-child-component').changeBarColor();
    }
}