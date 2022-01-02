// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { CategoriesComponent } from './categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';

@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    CategoriesRoutingModule
  ],
  exports: [
    CategoriesComponent
  ]
})
export class CategoriesModule { }
