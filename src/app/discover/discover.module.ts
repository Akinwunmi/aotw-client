// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

// modules
import { ArchiveHeaderModule } from '../archive-header';
import { ArchiveSubheaderModule } from '../archive-subheader';
import { ItemGridModule } from '../item-grid';

// components
import { DiscoverComponent } from './discover.component';

@NgModule({
  declarations: [
    DiscoverComponent
  ],
  imports: [
    ArchiveHeaderModule,
    ArchiveSubheaderModule,
    ItemGridModule,
    SharedModule
  ],
  exports: [
    DiscoverComponent
  ]
})
export class DiscoverModule { }
