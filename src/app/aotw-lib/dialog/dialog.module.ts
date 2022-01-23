// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';
import { ScrimModule } from '../scrim';

import { DialogComponent } from './dialog.component';

@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    ScrimModule,
    SharedModule
  ],
  exports: [
    DialogComponent
  ]
})
export class DialogModule { }
