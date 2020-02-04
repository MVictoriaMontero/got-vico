import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousesRoutingModule } from './houses-routing.module';
import { HousesComponent } from './houses.component';
import { SimplebarAngularModule } from 'simplebar-angular';
import { InformationHousesService } from './services/information-houses.service';


@NgModule({
  declarations: [
    HousesComponent,
  ],
  imports: [
    CommonModule,
    HousesRoutingModule,
    SimplebarAngularModule,
  ],
  providers: [
    InformationHousesService
  ]
})
export class HousesModule { }
