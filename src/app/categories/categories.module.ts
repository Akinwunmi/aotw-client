// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchBarModule } from '@aotw-lib';

import { SharedModule } from '../shared';

import { CategoriesComponent } from './categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';

@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    SearchBarModule,
    RouterModule,
    SharedModule,
    CategoriesRoutingModule
  ],
  exports: [
    CategoriesComponent
  ]
})
export class CategoriesModule { }
