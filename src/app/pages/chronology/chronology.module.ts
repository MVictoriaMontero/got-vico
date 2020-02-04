import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChronologyRoutingModule } from './chronology-routing.module';
import { ChronologyComponent } from './chronology.component';


@NgModule({
  declarations: [ChronologyComponent],
  imports: [
    CommonModule,
    ChronologyRoutingModule
  ]
})
export class ChronologyModule { }
