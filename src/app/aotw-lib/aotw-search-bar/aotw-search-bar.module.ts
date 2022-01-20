// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';

import { AotwSearchBarComponent } from './aotw-search-bar.component';

@NgModule({
  declarations: [
    AotwSearchBarComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    AotwSearchBarComponent
  ]
})
export class AotwSearchBarModule { }
