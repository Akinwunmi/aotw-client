// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';

import { ScrimModule } from '../scrim';
import { SharedModule } from '../shared';

import { FiltersComponent } from './filters.component';

@NgModule({
  declarations: [
    FiltersComponent
  ],
  imports: [
    ScrimModule,
    SharedModule
  ],
  exports: [
    FiltersComponent
  ]
})
export class FiltersModule { }
