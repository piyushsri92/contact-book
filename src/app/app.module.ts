import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from "@angular/material/icon";
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ContactSummaryModule } from './contact-summary/contact-summary.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    ContactSummaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
