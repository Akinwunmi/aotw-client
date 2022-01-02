// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// modules
import { PocOtwModule } from './poc-otw-client/poc-otw.module';
// components
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'poc',
    loadChildren: (): Promise<PocOtwModule> => import('./poc-otw-client/poc-otw.module').then(module => {
      return module.PocOtwModule
    }),
    data: {
      title: 'POC'
    }
  },
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Archive'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
