import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({providedIn : 'root'})
export class UrlService{
constructor(private http:HttpClient)
{}

public modelService(value){
return this.http.get('http://localhost:8101/series-model/'+value);
}

public accessoryService(modelId){
    return this.http.get('http://localhost:8100/accessory/'+modelId);
    }

 public colorService(colorId){
    return this.http.get('http://localhost:8102/color/'+colorId);
    }
    

public seriesService()
{
    return this.http.get('http://localhost:8101/series');
}

public orderService(orderStore)
{
    console.log(orderStore);
    
    return this.http.post('http://localhost:8200/order',orderStore);
    
}


}