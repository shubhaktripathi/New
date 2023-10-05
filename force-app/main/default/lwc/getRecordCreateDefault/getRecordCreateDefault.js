import ACCOUNT from '@salesforce/schema/Account';
import { getRecordCreateDefaults } from 'lightning/uiRecordApi';
import { LightningElement,wire } from 'lwc';

export default class GetRecordCreateDefault extends LightningElement {
    tableHeader=[]
    tableBody=[]
    @wire(getRecordCreateDefaults, {
        objectApiName: ACCOUNT,
    })wiredResult({data,error}){
        console.log(data)
        if(data){
            const { fields } = data.objectInfos.Account
            this.tableHeader= ['Api Name', 'Data Type', 'Label', 'Length', 'Is Required']
            this.tableBody = Object.keys(fields).map(item=>{
                let field=fields[item]
                //let apiname=field.apiname;
                const {apiName, dataType, label, length, required} = field
                return {apiName, dataType, label, length, required}
            })
            console.log(JSON.stringify(this.tableHeader))
            console.log(JSON.stringify(this.tableBody))

        }
        if(error){
            console.error(error)
        }

    }
}