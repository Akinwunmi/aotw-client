// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { ScrimComponent } from './scrim.component';

@NgModule({
  declarations: [
    ScrimComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ScrimComponent
  ]
})
export class ScrimModule { }
