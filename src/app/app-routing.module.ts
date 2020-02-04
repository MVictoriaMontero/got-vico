import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'characters', loadChildren: () => import('./pages/characters/characters.module').then(m => m.CharactersModule)
  },
  {
    path: 'houses', loadChildren: () => import('./pages/houses/houses.module').then(m => m.HousesModule)
  },
  {
    path: 'chronology', loadChildren: () => import('./pages/chronology/chronology.module').then(m => m.ChronologyModule)
  },
  {
    path: '',  loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: ''
  },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
  ],
  exports: [RouterModule],
  declarations: [
    PageNotFoundComponent,
  ]
})
export class AppRoutingModule { }
