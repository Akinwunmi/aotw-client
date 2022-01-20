// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import {
  AotwGridToggleModule,
  AotwVisualModule,
  AotwYearPickerModule
} from '@aotw-lib';

import { SharedModule } from '../shared';

import { DiscoverComponent } from './discover.component';
import { DiscoverRoutingModule } from './discover-routing.module';
import { DiscoverGridComponent } from './discover-grid';
import { DiscoverHeaderComponent } from './discover-header';
import { DiscoverSubheaderComponent } from './discover-subheader';

@NgModule({
  declarations: [
    DiscoverComponent,
    DiscoverGridComponent,
    DiscoverHeaderComponent,
    DiscoverSubheaderComponent
  ],
  imports: [
    AotwGridToggleModule,
    AotwVisualModule,
    AotwYearPickerModule,
    SharedModule,
    DiscoverRoutingModule
  ],
  exports: [
    DiscoverComponent
  ]
})
export class DiscoverModule {}
