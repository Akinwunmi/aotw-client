// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared';

import { AotwTabsComponent } from './aotw-tabs.component';

@NgModule({
  declarations: [
    AotwTabsComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [
    AotwTabsComponent
  ]
})
export class AotwTabsModule { }
