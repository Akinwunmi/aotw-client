// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

// components
import { ArchiveSubheaderComponent } from './archive-subheader.component';

@NgModule({
  declarations: [
    ArchiveSubheaderComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ArchiveSubheaderComponent
  ]
})
export class ArchiveSubheaderModule { }
