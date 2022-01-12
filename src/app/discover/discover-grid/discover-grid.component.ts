// Copyright 2022,
// Jurrit van der Ploeg

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';

import { ActiveItem } from '../../active-item';
import { Item } from '../../items';

@Component({
  selector: 'app-discover-grid',
  templateUrl: './discover-grid.component.html',
  styleUrls: ['./discover-grid.component.scss']
})
export class DiscoverGridComponent implements OnInit {
  @Output() setItem = new EventEmitter();

  parentNames: string[] = [];
  selectedItems: Item[] = [];

  gridColumns$ = this.store.select('gridColumns');

  constructor(
    private store: Store<{ activeItem: ActiveItem, gridColumns: number }>
  ) { }

  ngOnInit(): void {
    this.store.select('activeItem').subscribe(({ parentNames, selectedItems }) => {
      this.parentNames = parentNames;
      this.selectedItems = selectedItems;
    });
  }

  selectItem(item: Item): void {
    this.setItem.emit(item);
  }
}
