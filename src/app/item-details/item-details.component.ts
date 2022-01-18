// Copyright 2022,
// Jurrit van der Ploeg

import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Item } from '../items';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent {
  state: 'opened' | 'closed' = 'closed';

  @Input()
  get item(): Item {
    return this._item;
  }
  set item(item: Item) {
    this._item = item;
    this.state = 'opened';
  }
  private _item: Item = {
    code: '',
    id: 0,
    itemType: '',
    items: [],
    name: '',
    visual: false
  };

  @Output() closed = new EventEmitter<void>();

  constructor() { }

  close(): void {
    this.closed.next();
  }
}
