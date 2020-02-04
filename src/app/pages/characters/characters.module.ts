import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { InformationCharactersService } from './services/information-characters.service';
import { CharactersComponent } from './characters.component';

import { SimplebarAngularModule } from 'simplebar-angular';



@NgModule({
  declarations: [
    CharactersComponent
  ],

  imports: [
    CommonModule,
    CharactersRoutingModule,
    SimplebarAngularModule,
  ],
  providers: [InformationCharactersService],
})
export class CharactersModule { }
