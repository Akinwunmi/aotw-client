// Copyright 2021,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './src/components/header/header.component';
import { MenuComponent } from './src/components/menu/menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent
  ]
})
export class AotwSharedModule { }
