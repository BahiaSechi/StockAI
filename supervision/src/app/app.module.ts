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
import { PredictionComponent } from './component/prediction/prediction.component';

import { ChartsModule } from "ng2-charts";
import { LineChartComponent } from './component/line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrainerComponent,
    StrategieComponent,
    PredictionComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    SplitterModule,
    AccordionModule,
    TableModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
