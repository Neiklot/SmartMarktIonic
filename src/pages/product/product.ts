import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toArray';

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {
  selectedItem: any;
  crear=false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.crear=navParams.get('pantallaCrear');
    // If we navigated to this page, we will have an item available as a nav param
    if(navParams.get('item')!=null){
        this.selectedItem = navParams.get('item');
    }else{
      this.selectedItem={ name : "",icon:"",image:""};
    }
  }

  imageTapped(event, item) {
    console.log(item.name);
  }

  guardarPushed(event,item,crear){
    if(this.crear){
    this.http.post("http://localhost:8080/SmartMarktServer/product",item)
         .map(result => result.json())
         .flatMap(result => result)
         .map(result => (<any> result))
         .toArray()
         .subscribe(result => {
             console.log(result);
         }, error => {
             console.error(error);
         });
         this.navCtrl.push(ProductPage);
  }else{
    this.http.put("http://localhost:8080/SmartMarktServer/product",item)
         .map(result => result.json())
         .flatMap(result => result)
         .map(result => (<any> result))
         .toArray()
         .subscribe(result => {
             console.log(result);
         }, error => {
             console.error(error);
         });
         this.navCtrl.push(ProductPage);
  }
}
}
