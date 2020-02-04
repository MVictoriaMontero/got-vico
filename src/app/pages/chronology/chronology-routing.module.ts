import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChronologyComponent } from './chronology.component';


const routes: Routes = [
  {
    path: '', component: ChronologyComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChronologyRoutingModule { }
