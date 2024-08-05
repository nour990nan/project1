import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { page2 } from './page2/page2.component';
import { page3 } from './page3/page3.component';
import { Page1 } from './page1/page1.component';





@NgModule({
  declarations: [
    AppComponent ,
    Page1 ,
    page2 ,
    page3
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
