// Copyright 2021,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// components
import { TabsComponent } from './tabs.component';

@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TabsComponent
  ]
})
export class TabsModule { }
