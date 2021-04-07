import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App1SharedModule } from '../../../app1/src/app/app.module';
import { App2SharedModule } from '../../../app2/src/app/app.module';

// Rutas que van a cargar (de forma lazy) los módulos compartidos de
// cada una de las aplicaciones (App1 y App2)
const routes: Routes = [
  {
    path: 'app1',
    loadChildren: () =>
      import('../../../app1/src/app/app.module').then(m => m.App1SharedModule)
  },
  {
    path: 'app2',
    loadChildren: () =>
      import('../../../app2/src/app/app.module').then(m => m.App2SharedModule)
  },
  {
    path: '**',
    redirectTo: '/app1/home'
  }
];

/**
 * El módulo de enrutado de APP0 necesita el SharedModule
 * de amabas aplicaciones App1 y App2 para poder cargar sus rutas
 * y por tanto, lo vamos a incluir en los imports de este módulo
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    App1SharedModule.forRoot(), // nos traemos las rutas y configuración de App1
    App2SharedModule.forRoot() // nos traemos las rutas y configuración de App2
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
