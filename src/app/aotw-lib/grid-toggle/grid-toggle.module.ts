// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';

import { GridToggleComponent } from './grid-toggle.component';

@NgModule({
  declarations: [
    GridToggleComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    GridToggleComponent
  ]
})
export class GridToggleModule { }
