import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
//import { TrackbyComponent } from './trackby/trackby.component'; 
import { ObservableExampleComponent } from './observable-example/observable-example.component';
import { PromiseExampleComponent } from './promise-example/promise-example.component';
import {CountryService} from './country.service'
//import { CountryService } from '../country.service.ts.service';  

@NgModule({
  declarations: [
    AppComponent,
   // TrackbyComponent,
    ObservableExampleComponent,
    PromiseExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    AppRoutingModule,
    ReactiveFormsModule,  
    HttpClientModule  
  ],
  providers: [CountryService],
  bootstrap: [AppComponent],

})
export class AppModule { }
