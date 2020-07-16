import { Observable } from 'rxjs';
import { element } from 'protractor';
import { SeriesComponent } from './../series/series.component';
import { UrlService } from './../../../Url.service';
import { Component, OnInit, Input } from '@angular/core';
import { AccessoryBean } from './accessory-bean.component';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-accessory',
  templateUrl: './accessory.component.html',
  styleUrls: ['./accessory.component.css','../create.component.css']
})
export class AccessoryComponent implements OnInit {

  
  constructor(){}
  
 
  
  ngOnInit() {
    }

 
}