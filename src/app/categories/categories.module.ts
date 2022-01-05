// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SearchBarModule } from '../search-bar';
import { SharedModule } from '../shared';

import { CategoriesComponent } from './categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';

@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    RouterModule,
    SearchBarModule,
    SharedModule,
    CategoriesRoutingModule
  ],
  exports: [
    CategoriesComponent
  ]
})
export class CategoriesModule { }
