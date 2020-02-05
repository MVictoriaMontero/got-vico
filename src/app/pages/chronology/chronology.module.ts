import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChronologyRoutingModule } from './chronology-routing.module';
import { ChronologyComponent } from './chronology.component';
import { SimplebarAngularModule } from 'simplebar-angular';


@NgModule({
  declarations: [ChronologyComponent],
  imports: [
    CommonModule,
    ChronologyRoutingModule,
    SimplebarAngularModule
  ]
})
export class ChronologyModule { }
