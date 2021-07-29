// Copyright 2021,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// modules
import { TabsModule } from './components/elements/tabs/tabs.module';
// pipes
import { SearchFilterPipe } from './pipes/search-filter.pipe';
// components
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { SearchBarComponent } from './components/elements/search-bar/search-bar.component';

@NgModule({
  declarations: [
    SearchFilterPipe,
    HeaderComponent,
    MenuComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TabsModule
  ],
  exports: [
    SearchFilterPipe,
    CommonModule,
    FormsModule,
    HeaderComponent,
    MenuComponent,
    SearchBarComponent,
    TabsModule
  ]
})
export class AotwSharedModule { }
