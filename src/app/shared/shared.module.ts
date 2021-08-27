// Copyright 2021,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// modules
import { FiltersModule } from './filters/filters.module';
import { TabsModule } from './tabs/tabs.module';
// pipes
import { SearchFilterPipe } from './search-filter.pipe';
// components
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
    RouterModule,
    TabsModule
  ],
  exports: [
    SearchFilterPipe,
    CommonModule,
    FiltersModule,
    FormsModule,
    TabsModule,
    SearchBarComponent,
  ]
})
export class SharedModule { }
