// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesModule } from './categories';
import { UserProfileModule } from './user-profile';

const routes: Routes = [
  {
    path: '',
    loadChildren: (): Promise<CategoriesModule> => import('./categories').then(module => {
      return module.CategoriesModule;
    })
  },
  {
    path: 'user/:userId',
    loadChildren: (): Promise<UserProfileModule> => import('./user-profile').then(module => {
      return module.UserProfileModule;
    })
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
