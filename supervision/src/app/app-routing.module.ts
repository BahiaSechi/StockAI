import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { StrategieComponent } from './component/strategie/strategie.component';
import { TrainerComponent } from './component/trainer/trainer.component';
import {LineChartComponent} from "./component/line-chart/line-chart.component";
import {ComparaisonComponent} from "./component/comparaison/comparaison.component";

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'trainer', component: TrainerComponent},
  {path:'trainer/:stockId', component: TrainerComponent},
  {path:'strategie', component: StrategieComponent},
  {path: 'strategie/:stratId', component: StrategieComponent},
  {path:'strategies', component: ComparaisonComponent},
  {path: 'line-chart', component: LineChartComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
