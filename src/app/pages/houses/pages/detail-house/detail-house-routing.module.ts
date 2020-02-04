import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailHouseComponent } from './detail-house.component';


const routes: Routes = [
  {
    path: '', component: DetailHouseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailHouseRoutingModule { }
