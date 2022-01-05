// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { TabsModule } from '../tabs';

import { ItemsComponent } from './items.component';
import { ItemsRoutingModule } from './items-routing.module';

@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    SharedModule,
    TabsModule,
    ItemsRoutingModule
  ],
  exports: [
    ItemsComponent
  ]
})
export class ItemsModule { }
