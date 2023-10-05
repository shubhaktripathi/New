import { LightningElement,track,api } from 'lwc';

export default class JulyChildCmp extends LightningElement {
    @track value = [];
    @api welcomeNote;

    get options() {
        return [
            { label: 'Lucky', value: 'Lucky' },
            { label: 'Pramod', value: 'Pramod' },
            { label: 'Aashi', value: 'Aashi' },
            { label: 'Tiwariji', value: 'Tiwariji' },
        ];
    }
    handlechange(event){
        this.value=event.detail.value;
        let studentNames=this.value.join(',');
        const parentInputBox= new CustomEvent('updatestudentname',{detail:studentNames});
        this.dispatchEvent(parentInputBox);
    }
    @api
    updateValues(studentNames){//lucky,aashi,pramod
        this.value=studentNames.split(',');
        

    }
}