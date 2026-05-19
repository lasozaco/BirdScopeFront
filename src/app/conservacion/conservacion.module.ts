import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConservacionPageRoutingModule } from './conservacion-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ConservacionPage } from './conservacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConservacionPageRoutingModule,
    SharedModule
  ],
  declarations: [ConservacionPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ConservacionPageModule {}
