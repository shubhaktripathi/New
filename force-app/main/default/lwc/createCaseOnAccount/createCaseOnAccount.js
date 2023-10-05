import {LightningElement, api, wire, track} from 'lwc';
import getAcc from '@salesforce/apex/AccountHandler.getAcc';
import createCase from '@salesforce/apex/AccountHandler.createCase';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import updateDoc from '@salesforce/apex/AccountHandler.updateDoc';
import {NavigationMixin} from 'lightning/navigation';
import {CloseActionScreenEvent} from 'lightning/actions';

export default class CreateCaseOnAccount
  extends NavigationMixin (LightningElement) {
  @api recordId;
  accountName;
  desc;
  repair;
  trouble;
  @track caseRecordId;
  modal = true;

  connectedCallback () {
    setTimeout (() => {
      console.log (
        'this method is calling' + this.recordId + typeof this.recordId
      );
      getAcc ({recordId: this.recordId})
        .then (result => {
          console.log ('Result', result);
          this.accountName = result.Name;
        })
        .catch (error => {
          console.error ('Error:', error);
        });
    }, 5);
  }

  handleCancel () {
    this.modal = false;
    this.dispatchEvent (new CloseActionScreenEvent ());
  }

  onchangeHandler (event) {
    if (event.target.label == 'Symptom Description') {
      console.log('this is label   '+ event.target.label + typeof event.target.label );
      this.desc = event.target.value;
      console.log (this.desc);
    } else if (event.target.label === 'Repair Action Taken') {
      this.repair = event.target.value;
      console.log ('repair is' + this.repair);
    } else if (event.target.label === 'Troubleshooting Steps') {
      this.trouble = event.target.value;
      console.log ('trouble is' + this.trouble);
    }
  }

  get acceptedFormats () {
    return ['.pdf', '.png'];
  }

  handleUploadFinished (event) {
    // Get the list of uploaded files
    const uploadedFiles = event.detail.files;
    // alert('No. of files uploaded : ' + uploadedFiles.length);
  }

  onCLickHandler (event) {
    console.log ('onlclick');
    createCase ({
      descp: this.desc,
      repair: this.repair,
      trouble: this.trouble,
      accId: this.recordId,
    })
      .then (result => {
        console.log ('Result', result);
        this.caseRecordId = result.Id;
        console.log ('case id is ' + this.caseRecordId);
        this.dispatchEvent (
          new ShowToastEvent ({
            title: 'case ',
            message: 'case created successfully',
            variant: 'success',
          })
        );
        this[NavigationMixin.Navigate] ({
          type: 'standard__recordPage',
          attributes: {
            recordId: this.caseRecordId,
            actionName: 'view',
          },
        });
        updateDoc ({accId: this.recordId, caseId: this.caseRecordId})
          .then (result => {
            console.log ('Result', result);
          })
          .catch (error => {
            console.error ('Error:', error);
          });
      })
      .catch (error => {
        console.error ('Error:', error);
      });
  }
}
