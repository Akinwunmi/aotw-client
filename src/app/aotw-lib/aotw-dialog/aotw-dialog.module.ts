// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';

import { AotwScrimModule } from '../aotw-scrim';
import { SharedModule } from '../../shared';

import { AotwDialogComponent } from './aotw-dialog.component';

@NgModule({
  declarations: [
    AotwDialogComponent
  ],
  imports: [
    AotwScrimModule,
    SharedModule
  ],
  exports: [
    AotwDialogComponent
  ]
})
export class AotwDialogModule { }
