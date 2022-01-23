// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { TabsModule } from '@aotw-lib';

import { SharedModule } from '../shared';

import { ItemsComponent } from './items.component';
import { ItemsRoutingModule } from './items-routing.module';

@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    TabsModule,
    SharedModule,
    ItemsRoutingModule
  ],
  exports: [
    ItemsComponent
  ]
})
export class ItemsModule { }
