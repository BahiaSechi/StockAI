import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { StrategieComponent } from './component/strategie/strategie.component';
import { TrainerComponent } from './component/trainer/trainer.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'trainer', component: TrainerComponent},
  {path:'strategie', component: StrategieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
