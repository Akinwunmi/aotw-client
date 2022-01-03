// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesModule } from './categories';

const routes: Routes = [
  {
    path: '',
    loadChildren: (): Promise<CategoriesModule> => import('./categories').then(module => {
      return module.CategoriesModule;
    })
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
