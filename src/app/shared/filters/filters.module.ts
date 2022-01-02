// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { FiltersComponent } from './filters.component';

@NgModule({
  declarations: [
    FiltersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FiltersComponent
  ]
})
export class FiltersModule { }
