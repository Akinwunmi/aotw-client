// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { AotwSearchBarModule } from '@aotw-lib';

import { SharedModule } from '../shared';

import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    AotwSearchBarModule,
    SharedModule,
    SearchRoutingModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
