import {LightningElement, track, wire, api} from 'lwc';
import USER from '@salesforce/schema/user';
import NAME from '@salesforce/schema/user.name';
import EMAIL_FIELD from '@salesforce/schema/User.Email';
import {getRecords} from 'lightning/uiRecordApi';
import getUsers from '@salesforce/apex/GetUser.getUsers';
import checkPermissions from '@salesforce/apex/GetUser.checkPermissions';
import updatePermission from '@salesforce/apex/GetUser.updatePermission';

const actions = [
  {label: 'check permission', name: 'check permission'},
  {label: 'update permission', name: 'update permission'},
];
const columns = [
  {
    label: 'Name',
    fieldName: 'Name',
    type: 'text', iconName: 'utility:change_owner',alignment: 'center',
    cellAttributes: {alignment: 'center', iconName: 'utility:adduser'},
  },
  {
    type: 'action', iconName: 'utility:connected_apps',
    typeAttributes: {rowActions: actions},
  },
];

export default class LeadShare extends LightningElement {
  @api recordId;
  userList;
  columns = columns;
  userRecord;
  userName;
  userPermission;
  updatedPermission;

  @wire (getUsers)
  userLists({error, data}) {
    if (data) {
      console.log ('Data' + data);
      this.userList = data;
    } else if (error) {
      console.error ('Error:' + error);
    }
  }

  handleRowAction (event) {
    const actionName = event.detail.action.name;
    const row = event.detail.row;
    switch (actionName) {
      case 'check permission':
        this.checkPerm (row);
        break;
      case 'update permission':
        this.updatePerm (row);
        break;
      default:
    }
  }

  checkPerm (row) {
    console.log ('row is ' + JSON.stringify (row));
    this.userName = row.Name;
    this.userRecord = row.Id;
    console.log ('rec id' + this.recordId);
    checkPermissions ({leadId: this.recordId, userId: this.userRecord})
      .then (result => {
        console.log ('Result', result);
        this.userPermission = result;
        console.log ('ps is' + JSON.stringify (this.userPermission));
      })
      .catch (error => {
        console.error ('Error:', error);
      });
  }

  updatePerm (row) {
    this.userRecord = row.Id;
    updatePermission ({leadId: this.recordId, userId: this.userRecord})
      .then (result => {
        console.log ('Result 2', result);
        this.userPermission = result;
        console.log ('us is' + JSON.stringify (this.updatedPermission));
      })
      .catch (error => {
        console.error ('Error:', error);
      });
  }
}
