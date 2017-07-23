import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { StockPage } from '../productos/stock/stock';
import { StockListaPage } from '../productos/stockLista/stockLista';

@Component({
  selector: 'page-products',
  templateUrl: 'productos.html'
})
export class ProductsPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  tab1Root: any = StockPage;
  tab2Root: any = StockListaPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ProductsPage, {
      item: item
    });
  }
}
