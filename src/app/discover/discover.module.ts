// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { VisualModule } from '../visual';

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
    SharedModule,
    VisualModule,
    DiscoverRoutingModule
  ],
  exports: [
    DiscoverComponent
  ]
})
export class DiscoverModule { }
