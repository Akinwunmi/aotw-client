// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';

import { AotwDialogModule } from '../aotw-lib';
import { SharedModule } from '../shared';
import { VisualModule } from '../visual';

import { ItemDetailsComponent } from './item-details.component';

@NgModule({
  declarations: [
    ItemDetailsComponent
  ],
  imports: [
    AotwDialogModule,
    SharedModule,
    VisualModule
  ],
  exports: [
    ItemDetailsComponent
  ]
})
export class ItemDetailsModule { }
