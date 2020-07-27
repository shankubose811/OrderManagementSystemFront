import { CreateComponent } from './../create.component';
import { OrderBean, Accessory, Color } from './order-bean.component';
import { ColorBean } from './color-bean.component';
import { AccessoryBean } from '../accessory/accessory-bean.component';
import { ModelBean } from './model-bean.component';
import { UrlService } from '../../../Url.service';
import { SeriesBean } from './series-bean.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css','../create.component.css']
})
export class SeriesComponent implements OnInit {

  public returnMessage : string;
  public totalSeriesPrice : number = 0;
  public totalModelPrice : number = 0;
  public totalColorPrice : number = 0;
  public totalAccyPrice : number = 0;
  public totalPrice : number = 0;
  public fetchColor:ColorBean[] = [];
  public fetchAccessory:AccessoryBean[] = [];
  isFetching : boolean = true;
  public fetchSeries : SeriesBean[]  = [];
  public fetchModel : ModelBean[]=[];
  public accyArray = [];
  public colorArray = [];
  public accessoryFinalArray : Accessory[] = [];
  public colorFinalArray : Color[] = [];
  public series : string ;
  public model : string ;
  
  constructor( private fetchUrl : UrlService ,private create : CreateComponent) { }

  

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
    
    for(let ser of this.fetchSeries)
    {
      if(value === ser.sName)
      {
      this.totalSeriesPrice = ser.seriesPrice;
      }
    }
    console.log("The selected value is"+value);
    this.series = value;
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
    var colorModel=event.target.value;
    
    console.log(colorModel);
    for(let mod of this.fetchModel)
    {
      if(mod.modelId == colorModel)
      {
        this.model = mod.modelName;
      this.totalModelPrice = mod.modelPrice;
      }
    }
  
     this.fetchUrl.accessoryService(colorModel).subscribe((accessory:AccessoryBean[])=>{
     this.fetchAccessory=accessory;
     console.log(this.fetchAccessory);
     })
     this.fetchUrl.colorService(colorModel).subscribe((color:ColorBean[])=>{
      this.fetchColor=color;
      console.log(this.fetchColor);
      })

   }

  //  saveData(){
  //   //  this.order.mName = this.model;
  //   //  console.log(this.model);
  //   //  this.order.sName = this.series;
  //   //  this.order.oId = "";
  //   //  this.order.totalPrice = this.totalPrice; 
  //    this.create.saveOrderData(this.series,this.model , this.totalPrice ); 
  //  }
 
  passObjGetArray(item :any)
  {
    let arr = [];
    Object.keys(item).map(function(key){  
      arr.push({[key]:item[key]}) 
      }); 
      return arr;
  }

   
   onItemSelectAccy(item: any) {
   this.accyArray =  this.passObjGetArray(item);
   this.accessoryFinalArray.push(this.accyArray[0]);
   
   for(let id of this.fetchAccessory)
    {
      if(id.accyId === this.accyArray[0].accyId)
      {
        this.totalAccyPrice = this.totalAccyPrice + id.accyPrice;
      }
    }
   console.log(this.totalAccyPrice);

  }
  onItemDeSelectAccy(item : any)
  {
    this.accyArray =  this.passObjGetArray(item);
    this.accessoryFinalArray.pop();
    console.log(this.accessoryFinalArray);
    for(let id of this.fetchAccessory)
    {
      if(id.accyId === this.accyArray[0].accyId)
      {
        this.totalAccyPrice = this.totalAccyPrice - id.accyPrice;
      }
    }
    console.log(this.totalAccyPrice);


  }

  onItemSelectColor(item: any) {
    this.colorArray =  this.passObjGetArray(item);
    this.colorFinalArray.push(this.colorArray[0]);
    for(let id of this.fetchColor)
     {
       if(id.colorId === this.colorArray[0].colorId)
       {
         this.totalColorPrice = this.totalColorPrice + id.colorPrice;
       }
     }
    console.log(this.totalColorPrice);
 
   }
   onItemDeSelectColor(item : any)
   {

    this.colorArray =  this.passObjGetArray(item);
    this.colorFinalArray.pop();
    console.log(this.colorFinalArray);
    for(let id of this.fetchColor)
     {
       if(id.colorId === this.colorArray[0].colorId)
       {
         this.totalColorPrice = this.totalColorPrice - id.colorPrice;
       }
     }
    console.log(this.totalColorPrice);
   }


  onSelectAll(items: any) {
    console.log(items);
  }
 
 
  totalSumOfOrder()
  {
    this.totalPrice = this.totalAccyPrice + this.totalModelPrice +this.totalSeriesPrice + this.totalColorPrice;
     
    console.log(this.totalPrice);
    return this.totalPrice;
  }

  
  
  saveOrderData(){
    
    let requestParameter = new  OrderBean();
    requestParameter.orderId = this.series.substring(5,(this.series.length)) + this.model.substring(4,(this.model.length))
                                + Math.floor(Math.random()*100) ;
    requestParameter.series = this.series;
    console.log(this.series);
    requestParameter.model = this.model;
    console.log(this.model);
    requestParameter.accessory = this.accessoryFinalArray;
    requestParameter.color = this.colorFinalArray;
    requestParameter.totalPrice = this.totalPrice;
    
    this.fetchUrl.orderService(requestParameter).subscribe(data =>{
      console.log(data);
    })

  }
  
  resetMethod(){}

}
