import {LightningElement, api, wire, track} from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_NUM from '@salesforce/schema/Account.Phone';
import WEBSITE from '@salesforce/schema/Account.Website';
import getAccount from '@salesforce/apex/AccountHandler.getAccount';
import updateAccount from '@salesforce/apex/AccountHandler.updateAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AccountQuickUpdateApex extends LightningElement {
  @api recordId;
  @track acc = {
    Name: NAME_FIELD,
    Phone: PHONE_NUM,
    Website: WEBSITE,
  };

  // @track acc = {
  //   Name: '',
  //   Phone: '',
  //   Website: '',
  // };

  oldName;

  @wire (getAccount, {recordId: '$recordId'})
  accList({error, data}) {
    if (data) {
      console.log ('Data', data);
      this.oldName = data.Name;
      this.acc.Name = data.Name;
      this.acc.Phone = data.Phone;
      this.acc.Website = data.Website;
      console.log ('acc is' + JSON.stringify (this.acc));
    } else if (error) {
      console.error ('Error:', error);
    }
  }

  changeHandler (event) {
    if (event.target.name === 'Name') {
      this.acc.Name = event.target.value;
      console.log ('name is' + this.acc.Name);
    } else if (event.target.name === 'website') {
      this.acc.Website = event.target.value;
    } else if (event.target.name === 'Phone') {
      this.acc.Phone = event.target.value;
    }
  }

  handleClick (event) {
    console.log (JSON.stringify (this.acc));
    updateAccount ({
      accId: this.recordId,
      acc: JSON.stringify (this.acc),
      accObj:this.acc
    })
      .then (result => {
        console.log ('Result', result);
        this.dispatchEvent(new ShowToastEvent({
          title: 'Account Update',
          message: `Account ${this.oldName} updated to ${this.acc.Name}  successfully`,
          variant: 'success'
      }));
      
      })
      .catch (error => {
        console.error ('Error:', error);
      });
  }
}
