import { Component } from '@angular/core';
// import { ProductsServices } from './products.services';
import {ProductService} from './products.services';
@Component({
  selector: 'products',
  template: `<h2> {{ Title }} </h2>
  <ul *ngFor="let product of products">
  <li>{{ product }}</li>
  </ul>
  <img src='{{ imageUrl}}'/>
  <br/>
  <br/>
  
  <input (keyup)="onKeyUp($event)" />
  <input  (keyup.enter)="onKeyUp1(email)" />
  <input [value]="email" (keyup.enter)="onKeyUp2()" />
  <input [(ngModel)]="email" (keyup.enter)="onKeyUp4()" />
  <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp3()" />

  ` 
})
export class productsComponents{
  Title = 'List of products';
 imageUrl = "../assets/angular.png";
isActive=true;
products;



constructor (private service: ProductService) {
this.products = service.getproducts();
}

// onDivClicked(){
//   console.log("Div is clicked");
// }
// onSave($event){
// console.log("Button is clicked " , $event);
// }
onKeyUp($event){
  if($event.keyCode === 13 )
     console.log("Enter was pressed");
} 
onKeyUp1(email){
  console.log(email)
} 
email= "me@example.com";

    onKeyUp2(){
         console.log(this.email);
    } 
    onKeyUp3(){
      console.log(this.email);
 }  

 onKeyUp4(){
   console.log(this.email);
 }



}


