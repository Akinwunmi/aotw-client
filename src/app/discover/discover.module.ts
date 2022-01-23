// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import {
  GridModule,
  GridToggleModule,
  VisualModule,
  YearPickerModule
} from '@aotw-lib';

import { SharedModule } from '../shared';

import { DiscoverComponent } from './discover.component';
import { DiscoverRoutingModule } from './discover-routing.module';
import { DiscoverHeaderComponent } from './discover-header';
import { DiscoverSubheaderComponent } from './discover-subheader';

@NgModule({
  declarations: [
    DiscoverComponent,
    DiscoverHeaderComponent,
    DiscoverSubheaderComponent
  ],
  imports: [
    GridModule,
    GridToggleModule,
    SharedModule,
    VisualModule,
    YearPickerModule,
    DiscoverRoutingModule
  ],
  exports: [
    DiscoverComponent
  ]
})
export class DiscoverModule {}
