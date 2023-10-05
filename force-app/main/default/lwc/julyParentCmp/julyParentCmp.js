import { LightningElement } from 'lwc';

export default class JulyParentCmp extends LightningElement {
    childNote="hello world";
    students='';
    handleStudentNames(event){
        let studentNames=event.target.value;
        const childcomp=this.template.querySelector('c-july-child-cmp');
        childcomp.updateValues(studentNames);


    }
    updateStudents(event){
        this.students=event.detail;


    }
}