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


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

  }

  imageTapped(event, item) {
    console.log(item.name);
  }
}
