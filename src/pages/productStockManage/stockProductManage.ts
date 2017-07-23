import { Component , ViewChild} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Chart } from 'chart.js';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toArray';

@Component({
  selector: 'page-stockProductManage',
  templateUrl: 'stockProductManage.html'
})
export class StockProductManagePage {
  selectedItem: any;
  crear=false;

@ViewChild('doughnutCanvas') doughnutCanvas;

  doughnutChart: any;

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

  addStock(event){
    this.selectedItem.stock++;
    this.ionViewDidLoad();
  }
  removeStock(event){
    this.selectedItem.stock--;
      this.ionViewDidLoad();
  }
  addQuantity(event){
    this.selectedItem.initialQuantity++;
      this.ionViewDidLoad();
  }
  removeQuantity(event){
    this.selectedItem.initialQuantity--;
      this.ionViewDidLoad();
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
         this.navCtrl.push(StockProductManagePage);
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
         this.navCtrl.push(StockProductManagePage);
  }
}

ionViewDidLoad() {

  this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

       type: 'doughnut',
       data: {
           labels: ["Consumida", "Stock"],
           datasets: [{
               label: '# of Votes',
               data: [this.selectedItem.initialQuantity-this.selectedItem.stock,this.selectedItem.stock],
               backgroundColor: [
                   'rgba(255, 99, 132, 0.2)',
                   'rgba(54, 162, 235, 0.2)',
                   'rgba(255, 206, 86, 0.2)',
                   'rgba(75, 192, 192, 0.2)',
                   'rgba(153, 102, 255, 0.2)',
                   'rgba(255, 159, 64, 0.2)'
               ],
               hoverBackgroundColor: [
                   "#FF6384",
                   "#36A2EB",
                   "#FFCE56",
                   "#FF6384",
                   "#36A2EB",
                   "#FFCE56"
               ]
           }]
       }


       });
     }
}
