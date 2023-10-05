import { LightningElement } from 'lwc';
import signInTemp from './signIn.html';
import signUpTemp from './signUp.html';
import defaultTemp from './renderMultipleTemplate.html';

export default class RenderMultipleTemplate extends LightningElement {
    selected = '';
    render(){
        return this.selected === 'sign-in' ? signInTemp : this.selected === 'sign-up' ? signUpTemp :
            defaultTemp;
    }

    clickHandler(event){
        this.selected = event.target.label;
        console.log(this.selected);
    }
}