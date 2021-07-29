// Copyright 2021,
// Jurrit van der Ploeg

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { TabsetComponent } from './tabset/tabset.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [
    TabsetComponent,
    TabComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabsetComponent,
    TabComponent
  ]
})
export class TabsModule { }
