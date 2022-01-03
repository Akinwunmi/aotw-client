// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DiscoverModule } from '../discover';
import { SearchModule } from '../search';

import { ItemsComponent } from './items.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsComponent,
    children: [
      {
        path: 'search',
        loadChildren: (): Promise<SearchModule> => import('../search').then(module => {
          return module.SearchModule;
        })
      },
      {
        path: 'discover',
        loadChildren: (): Promise<DiscoverModule> => import('../discover').then(module => {
          return module.DiscoverModule;
        })
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'discover'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
