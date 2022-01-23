// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserProfileComponent } from './user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
    data: {
      title: 'User Profile'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
