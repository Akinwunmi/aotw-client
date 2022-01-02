// Copyright 2022,
// Jurrit van der Ploeg

import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Item } from '../../items';

@Component({
  selector: 'app-discover-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent {
  @Input() active: Item = { id: '', code: '', name: '', items: [] };
  @Input() items: Item[] = [];
  @Output() setItem = new EventEmitter();

  constructor() { }

  selectItem(item: Item, index: number): void {
    this.setItem.emit({ ...item, index });
  }
}
