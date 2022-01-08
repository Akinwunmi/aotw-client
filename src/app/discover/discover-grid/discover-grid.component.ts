// Copyright 2022,
// Jurrit van der Ploeg

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';

import { Item } from '../../items';

@Component({
  selector: 'app-discover-grid',
  templateUrl: './discover-grid.component.html',
  styleUrls: ['./discover-grid.component.scss']
})
export class DiscoverGridComponent {
  @Input() items: Item[] = [];
  @Input() parents: string[] = [];
  @Output() setItem = new EventEmitter();

  gridColumns$ = this.store.select('gridColumns');

  constructor(
    private store: Store<{ gridColumns: number }>
  ) { }

  selectItem(item: Item): void {
    this.setItem.emit(item);
  }
}
