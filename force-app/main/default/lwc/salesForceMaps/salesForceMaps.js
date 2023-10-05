import { LightningElement } from 'lwc';

export default class SalesForceMaps extends LightningElement {
    zoomLevel = 5;
    listView = 'visible';
    mapMarkers = [
        {
            location: {
                City: 'Kanpur',
                Country: 'INDIA',
                PostalCode: '208021',
                State: 'UP',
                Street: 'Mall Road',
            },
            value: 'location001',
            title: 'The Landmark Building',
            description:
                'The Landmark is considered to be one of the city&#39;s most architecturally distinct and historic properties', //escape the apostrophe in the string using &#39;
            icon: 'standard:account',
        },
    ];

    mapMarkers1 = [
        {
            location: {
                Latitude: '37.790197',
                Longitude: '-122.396879',
            },
        },
    ];
}