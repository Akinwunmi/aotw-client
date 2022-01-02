// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

// components
import { ItemGridComponent } from './item-grid.component';

@NgModule({
  declarations: [
    ItemGridComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ItemGridComponent
  ]
})
export class ItemGridModule { }
