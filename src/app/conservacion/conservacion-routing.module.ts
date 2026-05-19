import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConservacionPage } from './conservacion.page';

const routes: Routes = [
  {
    path: '',
    component: ConservacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConservacionPageRoutingModule {}
