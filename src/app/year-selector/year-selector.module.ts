// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { YearSelectorComponent } from './year-selector.component';

@NgModule({
  declarations: [
    YearSelectorComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    YearSelectorComponent
  ]
})
export class YearSelectorModule { }
