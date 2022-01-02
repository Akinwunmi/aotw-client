// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { DiscoverComponent } from './discover.component';
import { GridComponent } from './grid';
import { HeaderComponent } from './header';
import { SubheaderComponent } from './subheader';

@NgModule({
  declarations: [
    DiscoverComponent,
    GridComponent,
    HeaderComponent,
    SubheaderComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    DiscoverComponent
  ]
})
export class DiscoverModule { }
