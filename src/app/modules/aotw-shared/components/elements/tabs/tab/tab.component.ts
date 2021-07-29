// Copyright 2021,
// Jurrit van der Ploeg

import { Component, Input } from '@angular/core';

// components
import { TabsetComponent } from '../tabset/tabset.component';

@Component({
  selector: 'aotw-tab',
  templateUrl: './tab.component.html'
})
export class TabComponent {
  @Input() title?: string;
  active: boolean = false;

  constructor(tabs: TabsetComponent) {
    tabs.addTab(this);
  }
}
