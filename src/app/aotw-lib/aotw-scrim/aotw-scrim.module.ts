// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';

import { AotwScrimComponent } from './aotw-scrim.component';

@NgModule({
  declarations: [
    AotwScrimComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    AotwScrimComponent
  ]
})
export class AotwScrimModule { }
