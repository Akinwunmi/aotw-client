// Copyright 2022,
// Jurrit van der Ploeg

import { Component, Input } from '@angular/core';

@Component({
  selector: 'aotw-tabs',
  templateUrl: './aotw-tabs.component.html',
  styleUrls: ['./aotw-tabs.component.scss']
})
export class AotwTabsComponent {
  @Input() selected!: string;
  tabs = [ 'search', 'discover' ];

  constructor() { }

  selectTab(tab: string): void {
    this.selected = tab;
  }
}
