// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualComponent } from './visual.component';

@NgModule({
  declarations: [
    VisualComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VisualComponent
  ]
})
export class VisualModule { }
