import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./modules/catalogo/catalogo.module').then(m => m.CatalogoModule)
  },
  {
    path: 'sobre-nos',
    loadChildren: () => import('./modules/sobre/sobre.module').then(m => m.SobreModule)
  }
];
