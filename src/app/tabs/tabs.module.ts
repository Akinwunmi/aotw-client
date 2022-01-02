// Copyright 2022,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

// components
import { TabsComponent } from './tabs.component';

@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TabsComponent
  ]
})
export class TabsModule { }
