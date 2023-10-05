import { LightningElement, wire } from 'lwc';
import getAccount from '@salesforce/apex/AccountController.getAccList';
import { loadStyle } from 'lightning/platformResourceLoader';
import COLORS from '@salesforce/resourceUrl/colors';
// Example :- import TRAILHEAD_LOGO from '@salesforce/resourceUrl/trailhead_logo';'

const COLUMS = [
    { label: 'Account Name', fieldName: 'Name' ,cellAttributes: {
        class: { fieldName: 'AccColor' }
    }},
    {
        label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency',
        cellAttributes: {
            class: { fieldName: 'color' },
            iconName: { fieldName: 'icon' }, iconPosition: 'right'
        }
    },
    {
        label: ' Industry', fieldName: 'Industry', type: 'text', cellAttributes: {
            class: { fieldName: 'indColor' }
        }
    },
]

export default class DataTableDemo extends LightningElement {
    dataTable;
    isCssLoaded = false;
    columnsList = COLUMS;
    @wire(getAccount)
    getAcc({ data, error }) {
        if (data) {
            this.dataTable = data.map(item => {
                let amountColor = item.AnnualRevenue < 10000000 ? "slds-text-color_destructive" : "slds-text-color_success";
                let iconName = item.AnnualRevenue < 10000000 ? "utility:down" : "utility:up";
                return { ...item, "color": amountColor, "icon": iconName, "indColor": "slds-icon-custom-custom15 slds-text-color_success" ,"AccColor":"datatable-orange",
        }

            });
            console.log(this.dataTable);
        }
        else {
            console.log(error);
        }
    }

    renderedCallback() {
        if (this.isCssLoaded) return
        this.isCssLoaded = true
        loadStyle(this, COLORS).then((result) => {
            console.log("loaded successfully");

        }).catch((err) => {
            console.log("Error in Loading ");

        });
    }
}