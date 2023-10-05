import { LightningElement } from 'lwc';

export default class Cardcmp extends LightningElement {

   students =['a','b','c','d','e'];

   Branches =['IT','MECH','CIVIL','BCA','BCS'];

    PRODUCTDETAILS="PRODUCT DETAILS";
    inputtext(event){
        this.PRODUCTDETAILS=event.target.value;
    }
    handleClick(event){
      alert('added to wishlist      '+event.target.variant); 
      
    }


   
}