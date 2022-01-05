// Copyright 2022,
// Jurrit van der Ploeg

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Input() selected = '';
  tabs = [ 'search', 'discover' ];

  constructor() { }

  selectTab(tab: string): void {
    this.selected = tab;
  }
}
