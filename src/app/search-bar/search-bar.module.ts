// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBarComponent } from './search-bar.component';

@NgModule({
  declarations: [
    SearchBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchBarComponent
  ]
})
export class SearchBarModule { }
