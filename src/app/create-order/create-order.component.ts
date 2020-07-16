import { SeriesBean } from './create/series/series-bean.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

//   seriesBean:SeriesBean [];

   constructor() { 
    
  }

  

  ngOnInit(): void {
   // this.getSeriesDetails();
  }

  //  getSeriesDetails():Observable{
  //   return this.http.get<SeriesBean[]>("http://localhost:8101/series");
     
  //  }

}
