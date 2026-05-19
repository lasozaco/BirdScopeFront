import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'especies',
    loadChildren: () => import('./especies/especies.module').then( m => m.EspeciesPageModule)
  },
  {
    path: 'conservacion',
    loadChildren: () => import('./conservacion/conservacion.module').then( m => m.ConservacionPageModule)
  },
  {
    path: 'reconocimiento',
    loadChildren: () => import('./reconocimiento/reconocimiento.module').then( m => m.ReconocimientoPageModule)
  },
  {
    path: 'acerca',
    loadChildren: () => import('./acerca/acerca.module').then( m => m.AcercaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
