import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Q1Component } from './q1/q1.component';
import { Q2Component } from './q2/q2.component';
import { Q3Component } from './q3/q3.component';
import { HomeComponent } from './home/home.component';
import { Q4Component } from './q4/q4.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { C1Component } from './q4/c1/c1.component';
import { C2Component } from './q4/c2/c2.component';
import { C3Component } from './q4/c3/c3.component';
import { C4Component } from './q4/c4/c4.component';

@NgModule({
  declarations: [
    AppComponent,
    Q1Component,
    Q2Component,
    Q3Component,
    HomeComponent,
    Q4Component,
    C1Component,
    C2Component,
    C3Component,
    C4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
