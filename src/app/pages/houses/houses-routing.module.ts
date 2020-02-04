import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HousesComponent } from './houses.component';


const routes: Routes = [
  {
    path: '', component: HousesComponent
  },
  {
    path: ':param', loadChildren: () => import('./pages/detail-house/detail-house.module').then(m => m.DetailHouseModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HousesRoutingModule { }
