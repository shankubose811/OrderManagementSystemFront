import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { HeaderComponent } from './create-order/header/header.component';
import { CreateComponent } from './create-order/create/create.component';
import { SeriesComponent } from './create-order/create/series/series.component';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { AccessoryComponent } from './create-order/create/accessory/accessory.component';

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateOrderComponent,
    HeaderComponent,
    CreateComponent,
    SeriesComponent,
    AccessoryComponent,
    LoginComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
