// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { DiscoverModule } from '../discover';
import { SearchModule } from '../search';
import { TabsModule } from '../tabs';

import { ItemsComponent } from './items.component';

@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    DiscoverModule,
    SearchModule,
    SharedModule,
    TabsModule
  ],
  exports: [
    ItemsComponent
  ]
})
export class ItemsModule { }
