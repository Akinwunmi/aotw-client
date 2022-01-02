// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { CategoriesComponent } from './categories.component';

@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    CategoriesComponent
  ]
})
export class CategoriesModule { }
