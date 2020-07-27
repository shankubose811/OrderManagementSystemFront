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



}
