import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenubarModule } from 'primeng/menubar';
import { AccordionModule } from 'primeng/accordion';
import { HomeComponent } from './component/home/home.component';
import { TrainerComponent } from './component/trainer/trainer.component';
import { StrategieComponent } from './component/strategie/strategie.component';
import { SplitterModule } from 'primeng/splitter';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PredictionComponent } from './component/prediction/prediction.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChartsModule } from "ng2-charts";
import { LineChartComponent } from './component/line-chart/line-chart.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './services/http-interceptor/http-interceptor.service';
import {PanelModule} from "primeng/panel";
import {CardModule} from "primeng/card";
import { ComparaisonComponent } from './component/comparaison/comparaison.component';
import { ChartStratComponent } from './component/chart-strat/chart-strat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrainerComponent,
    StrategieComponent,
    PredictionComponent,
    LineChartComponent,
    ComparaisonComponent,
    ChartStratComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    SplitterModule,
    AccordionModule,
    TableModule,
    ButtonModule,
    ChartsModule,
    InputNumberModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    PanelModule,
    CardModule
],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
