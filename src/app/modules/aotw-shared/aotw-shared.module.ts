// Copyright 2021,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { SearchBarComponent } from './components/elements/search-bar/search-bar.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    SearchBarComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    SearchBarComponent,
    SearchFilterPipe
  ]
})
export class AotwSharedModule { }
