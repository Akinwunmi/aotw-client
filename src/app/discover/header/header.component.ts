// Copyright 2022,
// Jurrit van der Ploeg

import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Item } from '../../items';

@Component({
  selector: 'app-discover-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() title = '';
  @Input() items: Item[] = [];
  @Input() selected = '';
  @Output() setItem = new EventEmitter();

  constructor() { }

  selectItem(item: Item): void {
    this.setItem.emit(item);
  }
}
