// Copyright 2022,
// Jurrit van der Ploeg

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Output() active = new EventEmitter<string>();

  tabs = [ 'Search', 'Discover' ];
  selectedTab = 'Discover';

  constructor() { }

  ngOnInit(): void {
    this.active.emit(this.selectedTab);
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
    this.active.emit(tab);
  }
}
