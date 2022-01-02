// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

// components
import { ArchiveHeaderComponent } from './archive-header.component';

@NgModule({
  declarations: [
    ArchiveHeaderComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ArchiveHeaderComponent
  ]
})
export class ArchiveHeaderModule { }
