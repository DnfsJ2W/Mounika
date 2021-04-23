import { SummaryPipe } from './pipes/SummaryPipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { productsComponents } from 'src/products.component';
import { ProductService } from 'src/products.services';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';

import { CourseComponent } from './course/course.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    productsComponents,
    CourseComponent,
    PipesComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
