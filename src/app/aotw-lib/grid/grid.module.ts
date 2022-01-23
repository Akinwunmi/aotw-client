// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';
import { VisualModule } from '../visual';

import { GridComponent } from './grid.component';

@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    VisualModule,
    SharedModule
  ],
  exports: [
    GridComponent
  ]
})
export class GridModule { }
