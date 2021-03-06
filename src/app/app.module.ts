import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StockListaPage } from '../pages/productos/stockLista/stockLista';
import { ProductsPage } from '../pages/productos/productos';
import { StockPage } from '../pages/productos/stock/stock';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductPage } from '../pages/product/product';
import { StockProductManagePage } from '../pages/productStockManage/stockProductManage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StockListaPage,
    ProductsPage,
    StockPage,
    ListPage,
    ProductPage,
    StockProductManagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StockListaPage,
    ProductsPage,
    StockPage,
      ListPage,
      ProductPage,
      StockProductManagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
