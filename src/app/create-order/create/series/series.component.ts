import { ColorBean } from './color-bean.component';
import { AccessoryBean } from '../accessory/accessory-bean.component';
import { ModelBean } from './model-bean.component';
import { UrlService } from '../../../Url.service';
import { SeriesBean } from './series-bean.component';
import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css','../create.component.css']
})
export class SeriesComponent implements OnInit {


  public totalPrice : number = 0;
  public fetchColor:ColorBean[] = [];
  public fetchAccessory:AccessoryBean[] = [];
  isFetching : boolean = true;
  public fetchSeries : SeriesBean[]  = [];
  public fetchModel : ModelBean[]=[];
  constructor(private http : HttpClient , private fetchUrl : UrlService) { }


  dropdownSettings:{};
  dropdownSettingsColor:{};
  ngOnInit(): void {
    this.fetchSeriesDetails();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'accyId',
      textField: 'accyName',
      allowSearchFilter: true
    };
    this.dropdownSettingsColor = {
      singleSelection: false,
      idField: 'colorId',
      textField: 'colorName',
      allowSearchFilter: true
    };
  }


  onSeriesSelected(event:any)
  {
    var value = event.target.value;
    console.log("The selected value is"+value);
    this.fetchUrl.modelService(value).subscribe((model: ModelBean[])=>{
      this.fetchModel=model;

      console.log(this.fetchModel);
    })

  }

  public fetchSeriesDetails(){
    this.fetchUrl.seriesService().subscribe((series:SeriesBean[])=>{
    this.fetchSeries=series;  
    
    })
  }

   public onModelSelected(event:any) {
    var modelId=event.target.value;
     this.fetchUrl.accessoryService(modelId).subscribe((accessory:AccessoryBean[])=>{
     this.fetchAccessory=accessory;
     console.log(this.fetchAccessory);
     })
   }
   public onModelSelectedColor(event:any) {
    var colorId=event.target.value;
     this.fetchUrl.colorService(colorId).subscribe((color:ColorBean[])=>{
     this.fetchColor=color;
     console.log(this.fetchColor);
     })
   }

  //  public onAccessorySelect(event : any)
  //  {
  //   var accessoryId = event.target.value;


  //  }


   onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }


  


}
