// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { AotwDialogModule, AotwVisualModule } from '@aotw-lib';

import { SharedModule } from '../shared';

import { ItemDetailsComponent } from './item-details.component';

@NgModule({
  declarations: [
    ItemDetailsComponent
  ],
  imports: [
    AotwDialogModule,
    AotwVisualModule,
    SharedModule
  ],
  exports: [
    ItemDetailsComponent
  ]
})
export class ItemDetailsModule { }
