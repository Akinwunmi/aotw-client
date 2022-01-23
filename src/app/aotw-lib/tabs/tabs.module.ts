// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared';

import { TabsComponent } from './tabs.component';

@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [
    TabsComponent
  ]
})
export class TabsModule { }
