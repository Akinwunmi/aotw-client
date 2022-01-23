// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';

import { VisualComponent } from './visual.component';

@NgModule({
  declarations: [
    VisualComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    VisualComponent
  ]
})
export class VisualModule { }
