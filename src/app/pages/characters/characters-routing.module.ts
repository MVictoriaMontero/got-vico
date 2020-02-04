import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters.component';


const routes: Routes = [
  {
    path: '', component: CharactersComponent
  },
  {
    // tslint:disable-next-line: max-line-length
    path: ':param', loadChildren: () => import('./pages/detail-character/detail-character.module').then(m => m.DetailCharacterModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class CharactersRoutingModule { }
