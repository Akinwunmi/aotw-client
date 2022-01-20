// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';

import { AotwVisualComponent } from './aotw-visual.component';

@NgModule({
  declarations: [
    AotwVisualComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    AotwVisualComponent
  ]
})
export class AotwVisualModule { }
