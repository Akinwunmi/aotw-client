// Copyright 2021,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortalHomeComponent } from './components/portal-home/portal-home.component';

const routes: Routes = [
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
