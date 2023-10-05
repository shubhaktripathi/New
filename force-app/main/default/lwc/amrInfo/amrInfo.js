import { LightningElement ,wire} from 'lwc';
import masterTemplate from './amrInfo.html';
import secondTemplate from './amrLicenseOccupation.html';
import thirdTemplate from './amrLicenseDetails.html';
import fourthTemplate from './amrLicenseStates.html';
import fifthTemplate from './amrLicenseStatus.html';
import sixthTemplate from './amrLicenseRules.html';
import seventhTemplate from './amrLicenseDisciplinaryActions.html';
import eighthTemplate from './amrLicenseRestrictions.html';
import ninthTemplate from './amrLicenseActivities.html';
import tenthTemplate from './amrLicenseDocuments.html';
import eleventhTemplate from './amrLicenseEmploymentAddress.html';
import twelvethTemplate from './amrLicenseContactDetails.html';
import thirteenthTemplate from './amrLicenseInfoPreview.html';
import fourteenthTemplate from './amrLicenseRegistrationConfirmation.html';
import secondTemplateError from './amrLicenseOccupationRoadblock.html';
import thirdTemplateError from './amrLicenseDetailsRoadblock.html';
import fourthTemplateError from './amrLicenseStatesRoadblock.html';
import fifthTemplateError from './amrLicenseStatusRoadblock.html';
import sixthTemplateError from './amrLicenseRulesRoadblock.html';
import seventhTemplateError from './amrLicenseDisciplinaryActionsRoadblock.html';
import UserPreferencesRecordHomeSectionCollapseWTShown from '@salesforce/schema/User.UserPreferencesRecordHomeSectionCollapseWTShown';
import styles from '@salesforce/resourceUrl/styles';
import verified_badge from '@salesforce/resourceUrl/verified_badge';
import { publish, MessageContext } from 'lightning/messageService';
import SampleMessageChannel from '@salesforce/messageChannel/SampleMessageChannel__c';



export default class MasterTemplate extends LightningElement {

     /*** validation for Step 1 (amrLicenceOccupation)***/
     occErr = false; // error when no occupation is selected
     licErr = false; // error when no licence company is selected
     errArr;  // (occErr || licErr ) for top box error
     occErrCss = ''; // error side bar on error
     helpClass = 'help_sec'; // dynamic css for help button validation
     helpclass1 = ''; // dynamics css for help button inline validation
     textInputErr = 'slds-p-bottom_small occupation_select'; // dynamic css for input box validation
     //occErrCss1 = '';
 
     /*** validation for Step 2 (amrLicenceDetails) ***/
     licInputCss = 'occupation_select';
     licNum = false; // error when no licence num
     licDay = false; // error when no licence Day
     licNam = false; // error when no licence Name
     err2 = false; //(OR of all errors)
     licNumCss = ''; // dynamic css for left red bar
     licDayCss = '';
     licNamCss = '';
     licDayInputCss = 'occupation_select'; // dynamic css for input box validation
     //licErrCss;
     //style = 'noerror';
 
     /*** validation for Step 3(amrLicenceStates) ***/
     stateErr = false; // Error when no state is selected
     stateCss = ''; // dynamic css for left Error bar
 
     /*** validation for Step 4(amrLicenceStatus) ***/
     statusErr = false; // Error when no status selected
     statusCss = ''; // dynamic css for left Error bar
 
     /*** validation for Step 5(amrLicenceRules) ***/
     rulesErr = false;
     rulesErrCss = '';
 
     /*** validation for Step 6(amrLicenceDisciplinaryActions) ***/
     d1Err = false;
     d1ErrCss = '';
 
     /*** validation for Step7 (amrLicenceRestiction)  ***/
     conErr = false;
     conErr1 = false;
     conErrCss = '';
     conErr1Css = '';
     conInputCss = 'occupation_select slds-var-m-bottom_large';
 
     /*** validation for Step8 (amrLicenceActivities)  ***/
     locErr = false; // error if nothing is selected
     locErr1 = false; // error if yes selected and input is blank
     locErrCss = ''; // sidebar error
     //locErr1Css = '';
 
     /*** validation for Step9(amrLicenceDocuments)  ***/
     fileErr = false;
     fileHelpClass = 'help_sec license_card_sec'; // dynamic css for help button validation
     fileErrCss=''
     fileHelpClass1 = '' // inline css for dynamic help button
     filePreview = []; // storing files
     filePreviewlenght = null;
 
     /*** validation for Step10(amrLicenceEmployementAddress)  ***/
     empErr = false;
     empErr1 = false;
     empErrCss = '';
     empErr1Css = '';
     empErr1InpCss = 'occupation_select';
     empErrHelpClass = 'help_sec traveling_sec';
     empErrHelpClass1 = ' ';
 
     /*** validation for Step11(contactDetails)  ***/
     chkErr = false;
     chkErrCss = '';
     checkBox = false;
     checkBox1 = false;
     checkBoxCss = '';
     checkBox1Css = '';
     chkErrInpCss = 'occupation_select';
 
     /*** validation for Step12(summary)  ***/
     sumErr = false;
     sumErrCss = '';

    badge = verified_badge;
    selected;
    display = false;
    licenceCond;
    takeAddress = false;
    checked1 = true;
    occ;
    type;
    icon = false;
    icon2 = false;
    icon3 = false;
    step1 = {};
    step1Copy = {};
    licenseName;
    licenseNumber;
    day;
    month;
    year;
    step2 = {};
    step2Copy = {};
    step3 = {};
    step3Copy = {};
    state;
    step4 = {};
    step4Copy = {}
    status;
    step5 = {};
    step5Copy = {};
    rules;
    actions1;
    actions2;
    actions3;
    step6 = {};
    step6Copy = {};
    step7 = {};
    step7Copy = {};
    condition;
    conText;
    specificCondition;
    step8 = {};
    step8Copy = {};
    checkedStep8;
    licenced;
    loc;
    location;
    locationArrayStep8 = [];
    indexOfStep8;
    step9;
    step10 = {};
    step10Copy = {}
    help = false;
    employment = false;
    // buttonval;
    // barwidth=1/12;
    evidence = false;
    checkedstep11 = false;;
    empAddress;
    streetAddress;
    suburb;
    postcode;
    territory;
    streetAddress2;
    suburb2;
    postcode2;
    territory2;
    step11 = {};
    step11Copy = {};
    logocolor;

    @wire(MessageContext)
    messageContext;

    // passColor() {
    //     const payload = {
    //         logocolor: 'add',
    //     }
    //     publish(this.messageContext, COUNTING_UPDATED_CHANNEL, payload);
    //     console.log("add");

    // }


    render() {
        return this.selected == 'two' ? secondTemplate : this.selected == 'three' ? thirdTemplate : this.selected == 'four' ? fourthTemplate
            : this.selected == 'five' ? fifthTemplate : this.selected == 'six' ? sixthTemplate : this.selected == 'seven' ? seventhTemplate :
                this.selected == 'eight' ? eighthTemplate : this.selected == 'nine' ? ninthTemplate : this.selected == 'ten' ? tenthTemplate :
                    this.selected == 'eleven' ? eleventhTemplate : this.selected == 'twelve' ? twelvethTemplate : this.selected == 'thirteen' ? thirteenthTemplate : this.selected =='fourteen' ? fourteenthTemplate : this.selected == 'roadBlock1' ? secondTemplateError : this.selected === 'roadBlock2' ? thirdTemplateError : this.selected == 'roadBlock3' ? fourthTemplateError : this.selected == 'roadBlock4' ? fifthTemplateError : this.selected == 'roadBlock5' ? sixthTemplateError : this.selected == 'roadBlock6' ? seventhTemplateError : masterTemplate;
    }

    roadBlockhanlder(event) {
        event.preventDefault();
        const payload = {
            logocolor: false,
            
        }
        publish(this.messageContext, SampleMessageChannel, payload);
        this.selected = event.target.dataset.id;
       
       
    }

    //Master template continue button
    clickHandlerMaster(event) {
        event.preventDefault();
        this.selected = event.target.dataset.id;
    }

    backHandler(event) {
        event.preventDefault();
        this.selected = event.target.dataset.id;
        this.step1 = {};
        //step1
        this.occErr = false;
        this.licErr = false;
        this.occErrCss = '';
        this.errArr = false;
        this.textInputErr = 'slds-p-bottom_small occupation_select';


        this.step2 = {};
        this.licNum = false;
        this.licDay = false;
        this.licNam = false;
        this.err2 = false;
        this.licNumCss = '';
        this.licInputCss = ' occupation_select';
        this.licDayCss = '';
        this.licNamCss = '';
        this.licDayInputCss = 'occupation_select';
        this.step3 = {};
        this.stateErr = false;
        this.stateCss = '';
        this.step4 = {};
        this.statusErr = false;
        this.statusCss = '';

        this.step5 = {};
        this.rulesErr = false;
        this.rulesErrCss = '';

        this.step6 = {};
        this.d1Err = false;
        this.d1ErrCss = '';

        this.step7 = {};
        this.conErr = false;
        this.conErr1 = false;
        this.conErrCss = '';
        this.conErr1Css = '';
        this.conInputCss = 'occupation_select slds-var-m-bottom_large';

        this.step8 = {};
        this.locErr = false;
        this.locErr1 = false;
        this.locErrCss = '';

        // this.step9 = {};
        this.fileErr = false;
        this.fileHelpClass = 'help_sec license_card_sec';
        this.fileErrCss=''

        this.fileHelpClass1 = '';
        this.step10 = {};
        this.empErr = false;
        this.empErr1 = false;
        this.empErrCss = '';
        this.empErr1Css = '';
        this.empErr1InpCss = 'occupation_select';
        this.empErrHelpClass = 'help_sec traveling_sec';
        this.empErrHelpClass1 = ' ';

        this.step11 = {};
        this.chkErr = false;
        this.chkErrCss = '';

        this.checkBox = false;
        this.checkBox1 = false;
        this.checkBoxCss = '';
        this.checkBox1Css = '';

        this.chkErrInpCss = 'occupation_select';

        this.sumErr = false;
        this.sumErrCss = '';

    }

    clickHandler(event) {
        event.preventDefault();
        //validation for step 1
        if (this.selected === 'two') {
            this.step1Copy = { ...this.step1 };
            console.log(this.step1Copy);
            if (this.step1.occupation && this.step1.ltype && this.step1.ltype != 'A company') {
                this.occErr = false;
                this.licErr = false;
                this.style = 'noerror';
                console.log("Good to Go");
                this.selected = event.target.dataset.id;
               
                console.log(this.selected);
                this.step1 = {};

            }
            if (this.step1.occupation == null) {
                console.log("Please Enter the occ value");
                this.occErr = true;
                this.occErrCss = 'v2';
                this.helpClass = 'help_sec1';
                this.helpclass1 = 'help_sec_p';
                this.textInputErr = 'slds-p-bottom_small occupation_select1';
                // this.occErrCss1 = 'occErrCss v2  ';
                // this.occOption = null;
                // this.occOption='Select the relevant occupation'
                this.style = 'error';
                this.errArr = this.occErr || this.licErr;
            }
            if (this.step1.occupation != null) {
                this.occErr = false;
                this.occErrCss = '';
                // this.occOption = 'Choose the Closest Option';
                this.style = 'noerror';
            }
            if (this.step1.ltype == null) {
                console.log("Please Enter the lic value");
                this.licErr = true;
                this.helpClass = 'help_sec1';
                this.helpclass1 = 'help_sec_p';
                this.occErrCss = 'occErrCss v2 ';// for dynamic css

                this.style = 'error';
                this.errArr = this.occErr || this.licErr;
            }

            if (this.step1.ltype != null) {
                this.licErr = false;
                this.style = 'noerror';
            }

            if (this.step1.ltype === 'A company') {
                this.selected = 'roadBlock1';
                this.step1 = {};

            }

        }
        //validation for step 2

        else if (this.selected == 'three') {

            this.step2Copy = { ...this.step2 };
            console.log(this.step2Copy);

            if (this.step2.name && this.step2.lnumber && this.step2.day && this.step2.month && this.step2.year) {
                const expdate = new Date(this.step2.year, this.step2.month - 1, this.step2.day);
                console.log(expdate);
                const today = new Date();
                if (expdate < today) {
                    this.selected = 'roadBlock2';
                    console.log("Your licence is expired");
                    this.step2={};
                }
                else {
                    console.log("Good");
                    this.selected = event.target.dataset.id;
                    console.log(this.selected);
                    this.step2 = {};
                    this.licNumCss = '';
                    this.licNamCss = '';
                    this.licDayCss = '';

                }

            }
            if (!this.step2.lnumber) {
                this.licNum = true;
                this.licNumCss = 'v2';
                this.licInputCss = ' occupation_select1';
                this.err2 = this.licNum || this.licNam || this.licDay;
            }
            if (!this.step2.name) {
                this.licNam = true;
                this.licNamCss = 'v2';
                this.licInputCss = ' occupation_select1';
                this.err2 = this.licNum || this.licNam || this.licDay;

            }

            if (!this.step2.day) {
                this.licDay = true;
                this.licDayCss = 'v2';
                this.licDayInputCss = 'slds-input occupation_select1';
                this.err2 = this.licNum || this.licNam || this.licDay;
            }




        }
        //validation for step 3

        else if (this.selected == 'four') {
            this.step3Copy = { ...this.step3 };
            console.log(this.step3Copy);
            if (this.step3.state && this.step3.state != "Queensland") {
                this.selected = event.target.dataset.id;
                console.log(this.selected);
                this.step3 = {};
                this.stateCss = '';
            }
            if (!this.step3.state) {
                this.stateErr = true;
                this.stateCss = 'v2';

            }
            if (this.step3.state == "Queensland") {
                this.selected = 'roadBlock3';
                this.step3 = {};

            }

        }


        //validation for step 4

        else if (this.selected == 'five') {
            this.step4Copy = { ...this.step4 };
            console.log(this.step4Copy);
            if (this.step4.status == 'no') {
                this.selected = event.target.dataset.id;
                console.log(this.selected);
                this.step4 = {};
                this.statusCss = '';
            }
            if (!this.step4.status) {
                this.statusErr = true;
                this.statusCss = 'v2';
            }
            if (this.step4.status == 'Yes,cancelled' || this.step4.status == 'Yes,suspended') {
                this.selected = 'roadBlock4';
                this.step4 = {};


            }

        }
        else if (this.selected == 'six') {
            this.step5Copy = { ...this.step5 };
            console.log(this.step5Copy);
            if (this.step5.rules == 'Yes') {
                this.selected = event.target.dataset.id;
                console.log(this.selected);
                this.step5 = {};
                this.rulesErrCss = '';
            }
            if (!this.step5.rules) {
                this.rulesErr = true;
                this.rulesErrCss = 'v2';
            }
            if (this.step5.rules == 'no') {

                this.selected = 'roadBlock5';
                this.step5 = {};
            }

        }

        // else if (this.selected == 'seven') {
        //     this.step6Copy = { ...this.step6 };
        //     console.log(this.step6Copy);
        //     if (this.step6.d1 == 'No' && this.step6.d2 == 'No' && this.step6.d3 == 'No') {
        //         this.selected = event.target.dataset.id;
        //         console.log(this.selected);
        //         this.step6 = {};
        //     }
        //     if (!this.step6.d1) {
        //         this.d1Err = true;
        //         this.d1ErrCss = 'v2';
        //     }
        //     if (this.step6.d1 == 'Yes' || this.step6.d2 == 'Yes' || this.step6.d3 == 'Yes') {

        //         this.selected = 'roadBlock6';
        //         this.step6 = {};
        //     }
        // }

        else if (this.selected == 'seven') {
            this.step6Copy = { ...this.step6 };
            console.log(this.step6Copy);
            if (this.step6.d1 == 'No' && this.step6.d2 == 'No' && this.step6.d3 == 'No') {
                this.selected = event.target.dataset.id;
                console.log(this.selected);
                this.step6 = {};
            }
            if (!this.step6.d1 && !this.step6.d2 && !this.step6.d3) {
                this.d1Err = true;
                this.d1ErrCss = 'v2';
            }
            if (this.step6.d1 == 'Yes' || this.step6.d2 == 'Yes' || this.step6.d3 == 'Yes') {

                this.selected = 'roadBlock6';
                this.step6 = {};
            }

            if ((this.step6.d1 == 'No' && this.step6.d2 == 'No' && !this.step6.d3) || (!this.step6.d1 && this.step6.d2 == 'No' && this.step6.d3 == 'No') || (this.step6.d1 == 'No' && !this.step6.d2 && this.step6.d3 == 'No')) {
                this.d1Err = true;
                this.d1ErrCss = 'v2';
                // this.step6 = {};

            }

            if ((this.step6.d1 == 'No' && !this.step6.d2 && !this.step6.d3) || (!this.step6.d1 && !this.step6.d2 && this.step6.d3 == 'No') || (!this.step6.d1 && this.step6.d2 == 'No' && !this.step6.d3)) {
                this.d1Err = true;
                this.d1ErrCss = 'v2';
                // this.step6 = {};

            }
        }



        else if (this.selected == 'eight') {
            console.log(this.step7);
            this.step7Copy = { ...this.step7 };
            console.log(this.step7Copy);
            if ((this.step7.condition != null && this.step7.conText != null) || this.step7.condition == 'no') {

                this.selected = event.target.dataset.id;
                console.log(this.selected);
                this.step7 = {};
                this.conErr = false;
                this.conErr1 = false;
            }
            if (!this.step7.condition && !this.step7.conText) {
                this.conErr = true;
                this.conErrCss = 'v2';
                this.conErr1 = false;
                this.conErr1Css = '';
            }
            if (this.step7.condition == 'yes' && !this.step7.conText) {
                this.conErr1 = true;
                this.conErr1Css = 'v2';
                this.conErr = false;
                this.conErrCss = 'v2';
                this.conInputCss = 'occupation_select1 slds-var-m-bottom_large';

            }

        }

        else if (this.selected == 'nine') {
            console.log(this.step8);
            this.step8Copy = { ...this.step8 };
            console.log(this.step8Copy);
            if ((this.step8.licenced != null && this.step8.location != null) || this.step8.licenced == 'no') {
                this.selected = event.target.dataset.id;
                console.log(this.selected);
                this.step8 = {};
                this.locErr = false;
                this.locErr1 = false;
            }
            if (!this.step8.licenced && !this.step8.location) {
                this.locErr = true;
                this.locErrCss = 'v2';
                this.locErr1 = false;
                // this.locErr1Css = '';
            }
            if (this.step8.licenced == 'yes' && !this.step8.location) {
                this.locErr1 = true;
                // this.locErr1Css = 'v2';
                this.locErr = false;
                this.locErrCss = 'v2';

            }
        }
        else if (this.selected == 'ten') //data-id value of the current page.
        {
            console.log(this.step9);
            this.step9Copy = { ...this.step9 };
            if (!this.step9) {
                console.log('Error!!');
                this.fileErr = true;
                this.fileErrCss='v2';
                this.fileHelpClass = 'help_sec1 license_card_sec';
                this.fileHelpClass1 = 'help_sec_p';
                console.log(this.fileErr);

                //Shubham should give markup validation here
            }
            else {
                console.log('Good to go');
                this.selected = event.target.dataset.id;
                this.fileErr = false;
                console.log(this.fileErr);
                this.step9 = {};

                //   this.step9.length = 0;
                //Shubham should give markup validation here (if:true variable)
            }
        }

        //validation for step10

        else if (this.selected == 'eleven') //data-id value of the current page i.e step11
        {
            console.log(this.step10);
            this.step10Copy = { ...this.step10 };
            if (!this.step10.empAddress) {
                console.log('Error!!');
                this.empErr = true;
                this.empErrCss = 'v2';
                this.empErr1InpCss = 'occupation_select';
                this.empErr1 = false;
                this.empErr1Css = '';
                this.empErrHelpClass = 'help_sec1 traveling_sec';

                this.empErrHelpClass1 = ' help_sec_p';
            }
            if ((this.step10.empAddress == 'yes1' && this.step10.empAddress &&
                this.step10.postcode &&
                this.step10.streetaddress &&
                this.step10.suburb &&
                this.step10.territory) || this.step10.empAddress == 'no1') {
                console.log('Good to go');
                this.selected = event.target.dataset.id;
                this.step10 = {};
                this.empErr = false;
                this.empErr1 = false;
                this.empErr1InpCss = 'occupation_select';
                this.step11.checkedstep11 = false;


            }
            if (this.step10.empAddress == 'yes1' && (!this.step10.empAddress ||
                !this.step10.postcode ||
                !this.step10.streetaddress ||
                !this.step10.suburb ||
                !this.step10.territory)) {
                this.empErr1 = true;
                this.empErr1Css = 'v2 ';
                this.empErr1InpCss = 'occupation_select1';
                this.empErrHelpClass = 'help_sec1 traveling_sec';

                this.empErrHelpClass1 = ' help_sec_p';
                this.empErr = false;
                this.empErrCss = '';
            }

        }

        //validation for step11
        else if (this.selected == 'twelve') //data-id value of the current page i.e step11
        {
            console.log(this.step11);
            this.step11Copy = { ...this.step11 };
            if (this.step11.checkedstep11 == false && (!this.step11.postcode2 ||
                !this.step11.streetaddress2 ||
                !this.step11.suburb2 ||
                !this.step11.territory2)) {
                this.chkErr = true;
                this.chkErrCss = 'v2';
                this.chkErrInpCss = 'occupation_select1';
                console.log("1");
            }

            if (this.step11.checkedstep11 == true) {
                this.selected = event.target.dataset.id;
                this.step11 = {};
                this.chkErr = false;
                console.log("4");
            }

            if (this.step11.checkedstep11 == false && this.step11.postcode2 &&
                this.step11.streetaddress2 &&
                this.step11.suburb2 &&
                this.step11.territory2) {
                console.log("2");
                this.selected = event.target.dataset.id;
                this.step11 = {};
                this.chkErr = false;
                console.log("3");
            }

        }

        else if (this.selected == 'thirteen') {
            event.preventDefault();

            if (this.checkBox == false || this.checkBox1 == false) {
                console.log("Error");
                this.sumErr = true;
                this.sumErrCss = 'v2';

            }
            else {
                console.log("success");
                this.selected= event.target.dataset.id;
                this.sumErr = false;
               // this.logocolor=true;
                const payload = {
                    logocolor: true,
                }
                publish(this.messageContext, SampleMessageChannel, payload);
               
            }


        }

    }



    clickHandler1(event) {//yes button
        this.display = true;
        this.licenced = event.target.value;
        this.step8 = { ...this.step8, licenced: this.licenced }
    }

    clickHandler2(event) { //no button
        this.display = false;
        this.step8 = {};
        this.licenced = event.target.value;
        this.step8 = { ...this.step8, licenced: this.licenced };
        console.log(this.step8);
        this.locErr = false;
        this.locErr1 = false;
    }

    // cHandler(event) {
    //     this.step7.condition=event.target.value;
    //     if(this.step7.condition=='yes'){
    //         this.licenceCond = true;
    //     }
    //     else if(this.step7.condition =='no'){
    //         this.licenceCond = false;
    //     }

    // }

    // cHandler1(event) { 
    //     this.licenceCond = false;
    //     this.step7={};
    //     this.step7.condition=event.target.value;
    // }

    clickHandler3(event) { //for no button step10
        this.takeAddress = false;
        this.step10 = {};
        this.empAddress = event.target.value;
        this.step10 = { ...this.step10, empAddress: this.empAddress };
        console.log(this.step10);
        this.empErr = false;
        this.empErr1 = false;
        // console.log(this.empAddress);


    }

    clickHandler4(event) {//for yes button step10
        this.takeAddress = true;
        this.empAddress = event.target.value;
        this.step10 = { ...this.step10, empAddress: this.empAddress };
        // console.log(this.empAddress);
        console.log(this.step10);

    }
    streetAddressHandler(event) {
        this.streetAddress = event.target.value;
        this.step10 = { ...this.step10, streetaddress: this.streetAddress };
        console.log(this.step10);
        console.log(this.streetAddress);

    }
    suburbHandler(event) {
        this.suburb = event.target.value;
        this.step10 = { ...this.step10, suburb: this.suburb };
        console.log(this.step10);
        console.log(this.suburb);

    }
    postcodeHandler(event) {
        this.postcode = event.target.value;
        this.step10 = { ...this.step10, postcode: this.postcode };
        console.log(this.step10);
        console.log(this.postcode);

    }
    territoryHandler(event) {
        this.territory = event.target.value;
        this.step10 = { ...this.step10, territory: this.territory };
        console.log(this.step10);
        console.log(this.territory);

    }

    checkHandler(event) {

        this.checkedstep11 = event.target.checked;
        this.checkedstep11 == true ? false : true;
        this.checked1 = this.checked1 == true ? false : true;
        console.log(this.checked1);
        this.step11 = { ...this.step11, checkedstep11: this.checkedstep11 }
    }

    streetAddressHandler2(event) {  //step11
        this.streetAddress2 = event.target.value;
        this.step11 = { ...this.step11, streetaddress2: this.streetAddress2 };
        console.log(this.step11);
        // console.log(this.streetAddress2);

    }
    suburbHandler2(event) {  //step11
        this.suburb2 = event.target.value;
        this.step11 = { ...this.step11, suburb2: this.suburb2 };
        console.log(this.step11);
        // console.log(this.suburb2);

    }
    postcodeHandler2(event) {  //step11
        this.postcode2 = event.target.value;
        this.step11 = { ...this.step11, postcode2: this.postcode2 };
        console.log(this.step11);
        // console.log(this.postcode2);

    }
    territoryHandler2(event) {  //step11
        this.territory2 = event.target.value;
        this.step11 = { ...this.step11, territory2: this.territory2 };
        console.log(this.step11);
        // console.log(this.territory2);

    }

    occupationHandler(event) {
        // this.step1=[...this.step1,[occupation]:event.target.value]
        // console.log(this.step1);
        this.occ = event.target.value;
        console.log(this.occ);
        this.step1 = { ...this.step1, occupation: this.occ };
        console.log(this.step1);
    }

    typef(event) {
        this.type = event.target.value;
        console.log('Licence type: ' + this.type);
        this.step1 = { ...this.step1, ltype: this.type };
        console.log(this.step1);
    }

    detailHandler1(event) {
        this.licenseName = event.target.value;
        console.log('license name:' + this.licenseName);
        this.step2 = { ...this.step2, name: this.licenseName };
        console.log(this.step2);
    }
    detailHandler2(event) {
        this.licenseNumber = event.target.value;

        console.log('license number:' + this.licenseNumber);
        this.step2 = { ...this.step2, lnumber: this.licenseNumber };
        console.log(this.step2);
    }
    detailHandler3(event) {
        this.day = event.target.value;
        console.log('day:' + this.day);
        this.step2 = { ...this.step2, day: this.day };
        console.log(this.step2);
    }
    detailHandler4(event) {
        this.month = event.target.value;
        console.log('month' + this.month);
        this.step2 = { ...this.step2, month: this.month };
        console.log(this.step2);
    }
    detailHandler5(event) //step2
    {
        this.year = event.target.value;
        console.log('year' + this.year);
        this.step2 = { ...this.step2, year: this.year };
        console.log(this.step2);
        // this.step2={lname:this.licenseName,lnumber:this.licenseNumber,day:this.day,month:this.month,year:this.year};
        // console.log(this.step2);
    }
    stateHandler(event) //step3
    {
        this.state = event.target.value;
        console.log(this.state);
        this.step3 = { ...this.step3, state: this.state };
        console.log(this.step3);

    }

    statusHandler(event) //step4
    {
        this.status = event.target.value;
        console.log(this.status);
        this.step4 = { ...this.step4, status: this.status };
        console.log(this.step4);
    }

    rulesHandler(event) //step5
    {
        this.rules = event.target.value;
        console.log(this.rules);
        this.step5 = { ...this.step5, rules: this.rules };
        console.log(this.step5);

    }

    actionsHandler1(event) {
        this.actions1 = event.target.value;
        console.log(this.actions1);
        this.step6 = { ...this.step6, d1: this.actions1 };
        console.log(this.step6);
    }
    actionsHandler2(event) {
        this.actions2 = event.target.value;
        console.log(this.actions2);
        this.step6 = { ...this.step6, d2: this.actions2 };
        console.log(this.step6);
    }
    actionsHandler3(event) {
        this.actions3 = event.target.value;
        console.log(+this.actions3);
        this.step6 = { ...this.step6, d3: this.actions3 };
        console.log(this.step6);
    }

    condHandler(event) {
        // event.stopPropagation();
        this.condition = event.target.value;
        if (this.condition == 'yes') {
            this.licenceCond = true;
        }
        else if (this.condition == 'no') {

            this.licenceCond = false;
            this.conErr = false;
            this.conErr1 = false;
            this.step7 = {};
            this.step7 = { ...this.step7, condition: this.condition };
        }
        this.step7 = { ...this.step7, condition: this.condition };
        console.log(this.step7);
    }

    cHandler3(event) {

        this.conText = event.target.value;
        this.step7 = { ...this.step7, conText: this.conText };
        console.log(this.step7);



    }

    locHandler(event) {
        this.location = event.target.value;
        this.checkedStep8 = event.target.checked;
        console.log('Checked? :' + this.checkedStep8);
        if (this.checkedStep8 == true) {
            this.locationArrayStep8.push(this.location);
        }
        else if (this.checkedStep8 == false) {
            this.indexOfStep8 = this.locationArrayStep8.indexOf(this.location);
            this.locationArrayStep8.splice(this.indexOfStep8, 1);
        }

        this.step8 = { ...this.step8, location: this.locationArrayStep8 };
        console.log(this.step8);
    }

    showHelp(event) {
        if (this.help == true) {
            this.icon = false;
            this.help = false;

            console.log('icon val' + this.icon);
        }
        else {
            this.icon = true;
            this.help = true;

            console.log('icon val' + this.icon);

        }
        console.log(this.help);
        event.preventDefault();
    }

    showEvidence(event) {
        if (this.evidence == true) {
            this.icon2 = false;
            this.evidence = false;
        }
        else {
            this.icon2 = true;
            this.evidence = true;
        }
        console.log(this.evidence);
        event.preventDefault();
    }
    employmentHandler(event) {
        if (this.employment == true) {
            this.icon3 = false;
            this.employment = false;
        }
        else {
            this.icon3 = true;
            this.employment = true;
        }
        console.log(this.employment);
        event.preventDefault();
    }

    //Step9 validation handler(s):
    fileUploadHandler(event) {
        //event.preventDefault();
        this.step9 = event.detail.files;
        this.entries = Object.entries(this.step9);
        const ary = [];
        for (let i = 0; i < this.entries.length; i++) {
            ary.push({ label: event.detail.files[i].name, size: event.detail.files[i].size, id: i });
        }
        this.filePreview = ary;
        console.log(this.filePreview);
        this.filePreviewlenght = this.filePreview.length;

    }

    checkBoxHandler(event) {
        event.preventDefault();
        let nam = event.target.name;
        if (nam === 'pa') {
            this.checkBox = event.target.checked;
            console.log(this.checkBox);

        }
        else if (nam == 'ja') {
            this.checkBox1 = event.target.checked;
            console.log(this.checkBox1);


        }

    }





}