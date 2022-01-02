// Copyright 2022,
// Jurrit van der Ploeg

import { Component } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items-view.component.html',
  styleUrls: ['./items-view.component.scss']
})
export class ItemsViewComponent {
  activeView = 'Discover';

  constructor() { }

  setActiveView(view: string): void {
    this.activeView = view;
  }
}
