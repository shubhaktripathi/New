import { LightningElement } from 'lwc';

export default class Parentcomp1 extends LightningElement {


   
    handleStudentNames(event){
let stdname=event.target.value;
const childcmp = this.template.querySelector('c-childcomp1');
childcmp.updatestudent(stdname);
    }
}