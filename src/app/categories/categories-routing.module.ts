// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemsModule } from '../items';

import { CategoriesComponent } from './categories.component';

const routes: Routes = [
  {
    path: ':category',
    loadChildren: (): Promise<ItemsModule> => import('../items').then(module => {
      return module.ItemsModule;
    }),
    data: {
      title: 'Category'
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
