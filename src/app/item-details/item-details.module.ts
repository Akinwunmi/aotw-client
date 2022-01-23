// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { DialogModule, VisualModule } from '@aotw-lib';

import { SharedModule } from '../shared';

import { ItemDetailsComponent } from './item-details.component';

@NgModule({
  declarations: [
    ItemDetailsComponent
  ],
  imports: [
    DialogModule,
    VisualModule,
    SharedModule
  ],
  exports: [
    ItemDetailsComponent
  ]
})
export class ItemDetailsModule { }
