// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchFilterPipe,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
