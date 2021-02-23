import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MenubarModule} from 'primeng/menubar';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';
import { HomeComponent } from './component/home/home.component';
import { TrainerComponent } from './component/trainer/trainer.component';
import { StrategieComponent } from './component/strategie/strategie.component';                  //api

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrainerComponent,
    StrategieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
