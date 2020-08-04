import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import ('./home/home.module').then (m => m.HomeModule)
      },
      {
        path: 'inside',
        loadChildren: () => import ('./inside/inside.module').then (m => m.InsideModule)
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
