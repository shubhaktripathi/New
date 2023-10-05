import { LightningElement } from 'lwc';
import temp1 from './1.html';
import temp2 from './2.html';
import defaultTemp from './form.html';
import temp3 from './3.html';
import temp4 from './4.html'

export default class Form extends LightningElement {
    selected = null;
    render() {
        return this.selected === '1' ?
            temp1 : this.selected === '2' ?
                temp2 : this.selected === '3' ?
                    temp3 : this.selected === '4' ?
                        temp4 : defaultTemp;
    }

    renderMethod(event) {
        this.selected = event.target.name;
        console.log(this.selected);
    }

    temp1Handler(event) {
        this.selected = event.target.name;

    }
}