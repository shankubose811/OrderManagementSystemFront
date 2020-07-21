import { SeriesComponent } from './series/series.component';
import { UrlService } from './../../Url.service';
import { OrderBean } from './series/order-bean.component';
import { Component, OnInit } from '@angular/core';
import { Injectable } from "@angular/core";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
@Injectable({providedIn : 'root'})
export class CreateComponent implements OnInit {

  public orderTwo : OrderBean = null;
  
  constructor(private fetchUrl : UrlService) { }

  ngOnInit(): void {
  }

  saveOrderData(series , model  , totalPrice){
  
    
    console.log(model);
    // let seriesLength = this.seriesComponent.series.length;
    // let modelLength = this.seriesComponent.model.length;

    // this.order.oId = this.seriesComponent.series.substring(6,seriesLength) + 
    // this.seriesComponent.model.substring(5,modelLength)+Math.floor(Math.random() *100); 

    // this.order.mName = this.seriesComponent.model;
    // console.log(this.order.mName);
    // this.order.sName = this.seriesComponent.series;
    // this.order.totalPrice = this.seriesComponent.totalPrice;

    // console.log(this.order);
  }


}
