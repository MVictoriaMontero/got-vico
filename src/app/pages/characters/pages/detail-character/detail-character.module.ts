import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailCharacterRoutingModule } from './detail-character-routing.module';
import { DetailCharacterComponent } from './detail-character.component';
import { TranslateModule } from '@ngx-translate/core';
import { SimplebarAngularModule } from 'simplebar-angular';


@NgModule({
  declarations: [
    DetailCharacterComponent
  ],
  imports: [
    CommonModule,
    DetailCharacterRoutingModule,
    TranslateModule,
    SimplebarAngularModule
  ]
})
export class DetailCharacterModule { }
