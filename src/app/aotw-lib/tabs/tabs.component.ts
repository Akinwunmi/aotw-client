// Copyright 2022,
// Jurrit van der Ploeg

import { Component, Input } from '@angular/core';

@Component({
  selector: 'aotw-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Input() selected!: string;
  tabs = [ 'search', 'discover' ];

  constructor() { }

  selectTab(tab: string): void {
    this.selected = tab;
  }
}
