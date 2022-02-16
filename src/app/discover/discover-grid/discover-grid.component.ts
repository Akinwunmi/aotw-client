// Copyright 2022,
// Jurrit van der Ploeg

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ActiveItem, setActiveItem } from '../../active-item';
import { Item } from '../../items';

@Component({
  selector: 'app-discover-grid',
  templateUrl: './discover-grid.component.html',
  styleUrls: ['./discover-grid.component.scss']
})
export class DiscoverGridComponent implements OnInit {
  activeItem!: ActiveItem;

  gridColumns!: number;

  constructor(
    private store: Store<{ activeItem: ActiveItem, gridColumns: number }>
  ) { }

  ngOnInit(): void {
    this.store.select('activeItem').subscribe(activeItem => {
      this.activeItem = activeItem;
    });
    this.store.select('gridColumns').subscribe(gridColumns => {
      this.gridColumns = gridColumns;
    });
  }

  selectChildItems(item: Item): void {
    let parents = this.activeItem.parents;
    if (!this.activeItem.parents.includes(this.activeItem.item)) {
      parents = [...this.activeItem.parents, this.activeItem.item];
    }

    const activeItem = {
      item,
      parents,
      parentNames: [...this.activeItem.parentNames, item.name],
      selectedItems: item.items
    };
    this.store.dispatch(setActiveItem({ activeItem }));
  }
}
