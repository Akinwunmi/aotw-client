// Copyright 2022,
// Jurrit van der Ploeg

import { Component, EventEmitter, Input, Output } from '@angular/core';

// models
import { Item } from '../item';

@Component({
  selector: 'app-item-grid',
  templateUrl: './item-grid.component.html',
  styleUrls: ['./item-grid.component.scss']
})
export class ItemGridComponent {
  @Input() items: Item[] = [];
  @Output() setItem = new EventEmitter();

  constructor() { }

  selectItem(item: Item): void {
    this.setItem.emit(item);
  }
}
