// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';

import { AotwGridToggleComponent } from './aotw-grid-toggle.component';

@NgModule({
  declarations: [
    AotwGridToggleComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    AotwGridToggleComponent
  ]
})
export class AotwGridToggleModule { }
