// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';

import { FiltersModule, FiltersService } from '../filters';
import { GridToggleModule } from '../grid-toggle';
import { SharedModule } from '../shared';
import { VisualModule } from '../visual';
import { YearPickerModule } from '../year-picker';

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
    FiltersModule,
    GridToggleModule,
    SharedModule,
    VisualModule,
    YearPickerModule,
    DiscoverRoutingModule
  ],
  providers: [
    FiltersService
  ],
  exports: [
    DiscoverComponent
  ]
})
export class DiscoverModule {}
