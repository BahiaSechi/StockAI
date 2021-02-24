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
    SplitterModule,
    AccordionModule,
    TableModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
