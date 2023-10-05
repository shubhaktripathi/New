import { LightningElement } from 'lwc';

export default class TemplateLooping extends LightningElement {
    carList=["I20","Baleno","Brezza"];
    carWebs=[{
        "name":"I20",
        "link":"https://www.carwale.com/hyundai-cars/i20/",
    },
    {
        "name":"Baleno",
        "link":"https://www.nexaexperience.com/baleno/?utm_form_type=Test-Drive&utm_source=google&utm_medium=cpc&utm_campaign=13754490367&utm_term=baleno&utm_content=c&gclid=CjwKCAjwx7GYBhB7EiwA0d8oe74dpa5LXJNA5IDscQLW8WnMcFLJQDSMJWk7GIkPtjK_qlsd5xL0_hoCaqUQAvD_BwE",
    }]
}