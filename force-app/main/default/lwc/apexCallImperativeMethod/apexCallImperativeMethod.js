import { LightningElement } from 'lwc';
import getSearchAccount from '@salesforce/apex/AccountController.getAccList1';

export default class ApexCallImperativeMethod extends LightningElement {
    searchKey = null;
    Account;
    error;
    a = 5; b = 6;

    handleChange(event) {
        this.searchKey = event.target.value;
        console.log(this.searchKey);

    }
    handleClick() {
        getSearchAccount({ name: this.searchKey })
            .then((result) => {
                this.Account = result;
                this.error = undefined;
            })
            .catch((error) => {
                this.error = error;
                this.contacts = undefined;
            });


    }

//     add(a, b) {
//         console.log(this.a + this.b);
//     }

//    (a,b)=>{
//     return a+b;
//    }

}