// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { DiscoverModule } from '../discover';
import { SearchModule } from '../search';
import { TabsModule } from '../tabs';

import { ItemsViewComponent } from './items-view.component';

@NgModule({
  declarations: [
    ItemsViewComponent
  ],
  imports: [
    DiscoverModule,
    SearchModule,
    SharedModule,
    TabsModule
  ],
  exports: [
    ItemsViewComponent
  ]
})
export class ItemsViewModule { }
