// Copyright 2022,
// Jurrit van der Ploeg

import { Component } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  activeView = 'Discover';

  constructor() { }

  setActiveView(view: string): void {
    this.activeView = view;
  }
}
