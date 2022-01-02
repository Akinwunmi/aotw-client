// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { DiscoverModule } from '../discover';
import { SearchModule } from '../search';
import { TabsModule } from '../tabs';

import { ItemsComponent } from './items.component';
import { ItemsRoutingModule } from './items-routing.module';

@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    DiscoverModule,
    SearchModule,
    SharedModule,
    TabsModule,
    ItemsRoutingModule
  ],
  exports: [
    ItemsComponent
  ]
})
export class ItemsModule { }
