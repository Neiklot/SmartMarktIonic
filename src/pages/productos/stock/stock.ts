import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toArray';


import { ProductPage } from '../../product/product';

@Component({
  selector: 'page-stock',
  templateUrl: 'stock.html'
})
export class StockPage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  posts: any;
  rows;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

      this.http.get("http://localhost:8080/SmartMarktServer/product")
           .map(result => result.json())
           .flatMap(result => result)
           .map(result => (<any> result))
           .toArray()
           .subscribe(result => {
               console.log(result);
               this.items =result;
               this.rows=(this.items.length/2);
           }, error => {
               console.error(error);
           });
  }

  itemTapped(event, item) {
    console.log(item.name);
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ProductPage, {
      item: item
    });
  }
}
