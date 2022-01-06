// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DiscoverComponent } from './discover.component';
import { DiscoverGridComponent } from './discover-grid';

const routes: Routes = [
  {
    path: '',
    component: DiscoverComponent,
    children: [
      {
        path: ':xx',
        component: DiscoverGridComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscoverRoutingModule { }
