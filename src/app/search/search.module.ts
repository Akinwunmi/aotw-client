// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import {
  GridModule,
  GridToggleModule,
  SearchBarModule,
  VisualModule,
} from '@aotw-lib';

import { SharedModule } from '../shared';

import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    GridModule,
    GridToggleModule,
    SearchBarModule,
    SharedModule,
    VisualModule,
    SearchRoutingModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
