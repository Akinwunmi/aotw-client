// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';

import { ScrimModule } from '../scrim';
import { SharedModule } from '../shared';

import { ItemDetailsComponent } from './item-details.component';

@NgModule({
  declarations: [
    ItemDetailsComponent
  ],
  imports: [
    ScrimModule,
    SharedModule
  ],
  exports: [
    ItemDetailsComponent
  ]
})
export class ItemDetailsModule { }
