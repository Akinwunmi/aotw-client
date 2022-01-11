// Copyright 2022,
// Jurrit van der Ploeg

import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-toggle',
  templateUrl: './grid-toggle.component.html',
  styleUrls: ['./grid-toggle.component.scss']
})
export class GridToggleComponent {
  views = [
    { type: 'list', active: false },
    { type: 'grid', active: true }
  ];

  constructor() { }

  setView(type: string): void {
    this.views.forEach(view => view.active = view.type === type ? true : false);
  }
}
