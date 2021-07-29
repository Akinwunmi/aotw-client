// Copyright 2021,
// Jurrit van der Ploeg

import { Component, ContentChildren, QueryList } from '@angular/core';

import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.scss']
})
export class TabsetComponent {
  @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>;
  activeTab?: TabComponent;

  constructor() {
    if (this.tabs) {
      this.activeTab = this.tabs.first;
    }
  }

  setActiveTab(tab: TabComponent): void {
    this.activeTab = tab;
  }
}
