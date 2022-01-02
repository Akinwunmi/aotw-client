// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesComponent } from './categories';
import { PocOtwModule } from './poc-otw-client/poc-otw.module';

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
    component: CategoriesComponent,
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
