import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReconocimientoPageRoutingModule } from './reconocimiento-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ReconocimientoPage } from './reconocimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReconocimientoPageRoutingModule,
    SharedModule
  ],
  declarations: [ReconocimientoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReconocimientoPageModule {}
