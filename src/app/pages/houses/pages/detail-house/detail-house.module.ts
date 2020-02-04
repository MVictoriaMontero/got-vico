import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailHouseRoutingModule } from './detail-house-routing.module';
import { DetailHouseComponent } from './detail-house.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    DetailHouseComponent,
  ],
  imports: [
    CommonModule,
    DetailHouseRoutingModule,
    TranslateModule
  ]
})
export class DetailHouseModule { }
