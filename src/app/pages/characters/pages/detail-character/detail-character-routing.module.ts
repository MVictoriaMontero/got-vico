import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailCharacterComponent } from './detail-character.component';


const routes: Routes = [
  {
    path: '', component: DetailCharacterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailCharacterRoutingModule { }
