import { LightningElement,api,wire } from 'lwc';
import GETMAP from '@salesforce/apex/MapController.getMap';

export default class SalesforceMapsForAccount extends LightningElement {
    zoomLevel = 5;
    listView = 'visible';
    @api recordId;
    selectedMarkerValue = 'location001';
    

    mapMarkers = [
        {
            location: {
                City: '',
                Country: '',
                PostalCode: '',
                State: '',
                Street: '',
            },
            value: 'location001',
            title: '',
            description:
                'The Landmark is considered to be one of the city&#39;s most architecturally distinct and historic properties', //escape the apostrophe in the string using &#39;
            icon: 'standard:account',
        },
        {
            location: {
                City: '',
                Country: '',
                PostalCode: '',
                State: '',
                Street: '',
            },
            value: 'location001',
            title: '',
            description:
                'The Landmark is considered to be one of the city&#39;s most architecturally distinct and historic properties', //escape the apostrophe in the string using &#39;
            icon: 'standard:account',
        }
    ];

    // *@wire(GETMAP, { recordId: '$recordId' })
    // wiredData*
    // this.acc=this.wiredData.Data
    // /


    @wire(GETMAP, { recordId: '$recordId' })
    wiredData({ error, data }) {
      if (data) {
        console.log('Data', data);
        this.acc=data;
        console.log('city '+this.mapMarkers[0].location.City);
        console.log('acc city is '+this.acc.ShippingCity);
        const updatedMapMarkers = [
            {
                location: {
                    City: this.acc.ShippingCity,
                    Country: this.acc.ShippingCountry,
                    PostalCode: this.acc.ShippingPostalCode,
                    State: this.acc.ShippingState,
                    Street: this.acc.ShippingStreet,
                },
                value: 'location001',
                title: 'Shipping City',
                description:
                    'The Landmark is considered to be one of the city&#39;s most architecturally distinct and historic properties',
                icon: 'standard:account',
            },
            {
                location: {
                    City: this.acc.BillingCity,
                    Country: this.acc.BillingCountry,
                    PostalCode: this.acc.BillingPostalCode,
                    State: this.acc.BillingState,
                    Street: this.acc.BillingStreet,
                },
                value: 'location002',
                title: 'Billing City',
                description:
                    'The Landmark is considered to be one of the city&#39;s most architecturally distinct and historic properties',
                icon: 'standard:account',
            },
        ];

        this.mapMarkers = updatedMapMarkers;

      } else if (error) {
         console.error('Error:', error);
      }
    }

    handleMarkerSelect(event) {
        this.selectedMarkerValue = event.target.selectedMarkerValue;
    }
    
}