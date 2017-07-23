import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Chart } from 'chart.js';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toArray';


import { StockProductManagePage } from '../../productStockManage/stockProductManage';


@Component({
  selector: 'page-list',
  templateUrl: 'stockLista.html'
})
export class StockListaPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
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
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(StockProductManagePage, {
      item: item
    });
  }
}
