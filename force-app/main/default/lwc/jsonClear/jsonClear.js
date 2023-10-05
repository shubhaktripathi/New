import {LightningElement,wire} from 'lwc';
import {getRecord, createRecord} from 'lightning/uiRecordApi';

/* https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_lightning_ui_api_record */

export default class JsonClear extends LightningElement {
 
  record = {
    apiName: 'Account',
    fields: {
        Name: null,
        AnnualRevenue: '',
    },
  };

 
  error;
  data;

  onchange (event) {
    this.record.fields.Name = event.target.value;
  }
  onchange1 (event) {
    this.record.fields.AnnualRevenue = event.target.value;

  }

  handleClick (event) {
    console.log('inside handleClick '+this.record);
    createRecord(this.record).then((result) => {
        console.log('result is '+JSON.stringify(this.record));
        // this.record.fields.Name = '';
        // this.record.fields.AnnualRevenue = '';    
        // console.log('result is '+JSON.stringify(this.record));
        
        this.template.querySelectorAll("lightning-input").forEach(element => {
            
              element.value = null;
            
          });
        console.log('new result is '+JSON.stringify(this.record))
        console.log(this.template.querySelectorAll("lightning-input"));

    }).catch((err) => {
        console.log('err is '+err);
    });
}
//Particuar field--    <lightning-input type="text" label="Enter Name" value={recordValue} data-name="name"></lightning-input>
// handleResetCityField(){
//     this.template.querySelector('lightning-input[data-name="name"]').value = null;    
//   }

}
