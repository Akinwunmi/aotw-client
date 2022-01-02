// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FiltersModule } from './filters/filters.module';
import { SearchFilterPipe } from './search-filter.pipe';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    SearchFilterPipe,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    FiltersModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    SearchFilterPipe,
    CommonModule,
    FiltersModule,
    FormsModule,
    SearchBarComponent,
  ]
})
export class SharedModule { }
