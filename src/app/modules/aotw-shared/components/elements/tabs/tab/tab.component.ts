// Copyright 2021,
// Jurrit van der Ploeg

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html'
})
export class TabComponent {
  @Input() title?: string;

  constructor() { }
}
