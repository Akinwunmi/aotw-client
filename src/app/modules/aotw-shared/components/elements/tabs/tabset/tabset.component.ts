// Copyright 2021,
// Jurrit van der Ploeg

import { Component } from '@angular/core';

// components
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'aotw-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.scss']
})
export class TabsetComponent {
  tabs: TabComponent[] = [];

  constructor() { }

  addTab(tab: TabComponent): void {
    if (this.tabs.length === 0) {
      tab.active = true;
    }

    this.tabs.push(tab);
  }

  setActiveTab(tab: TabComponent): void {
    for (const tab of this.tabs) {
      tab.active = false;
    }

    tab.active = true;
  }
}
