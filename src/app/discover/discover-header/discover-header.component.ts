// Copyright 2022,
// Jurrit van der Ploeg

import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Item } from '../../items';

@Component({
  selector: 'app-discover-header',
  templateUrl: './discover-header.component.html',
  styleUrls: ['./discover-header.component.scss']
})
export class DiscoverHeaderComponent {
  @Input() title = '';
  @Input() items: Item[] = [];
  @Input() selected = '';
  @Output() setItem = new EventEmitter();

  constructor() { }

  selectItem(item: Item): void {
    this.setItem.emit(item);
  }
}
