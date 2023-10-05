import { LightningElement, track ,api } from 'lwc';

export default class Childcomp1 extends LightningElement {
   @track value = [];
     
   @api welcomNote;

    get options() {
        return [
            { label: 'Ross', value: 'option1' },
            { label: 'Rachel', value: 'option2' },
            { label: 'g', value: 'ganesh' },
            { label: 'Rachel', value: 'pramod' },
        ];
    }
    handleChange(event)
    {
       alert(event.target.value);
    }
    @api updatestudent(stdname)
    {
        this.value= stdname.split(',');
      
    }

    

    
}