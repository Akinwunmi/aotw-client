// Copyright 2021,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegionsOtwModule } from './modules/regions-otw-client/regions-otw.module';
import { PortalHomeComponent } from './components/portal-home/portal-home.component';

const routes: Routes = [
  {
    path: 'regions',
    loadChildren: (): Promise<RegionsOtwModule> => import('./modules/regions-otw-client/regions-otw.module').then(module => {
      return module.RegionsOtwModule
    }),
    data: {
      title: 'Regions of the World'
    }
  },
  {
    path: '',
    component: PortalHomeComponent,
    data: {
      title: 'Archive of the World'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
