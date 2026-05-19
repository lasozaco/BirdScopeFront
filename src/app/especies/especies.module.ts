import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspeciesPageRoutingModule } from './especies-routing.module';
import { SharedModule } from '../shared/shared.module';

import { EspeciesPage } from './especies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspeciesPageRoutingModule,
    SharedModule
  ],
  declarations: [EspeciesPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EspeciesPageModule {}
