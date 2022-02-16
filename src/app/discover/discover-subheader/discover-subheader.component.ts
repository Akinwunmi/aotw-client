// Copyright 2022,
// Jurrit van der Ploeg

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ActiveItem, setActiveItem } from '../../active-item';
import { Item } from '../../items';

@Component({
  selector: 'app-discover-subheader',
  templateUrl: './discover-subheader.component.html',
  styleUrls: ['./discover-subheader.component.scss']
})
export class DiscoverSubheaderComponent implements OnInit {
  activeItem!: ActiveItem;

  constructor(
    private store: Store<{ activeItem: ActiveItem }>
  ) { }

  ngOnInit(): void {
    this.store.select('activeItem').subscribe(activeItem => {
      this.activeItem = {
        ...activeItem,
        parentNames: activeItem.parentNames.slice(0, -1)
      };
    });
  }

  selectParentItems(item: Item, index: number): void {
    const itemNameIndex = this.activeItem.parentNames.findIndex(parent => parent === item.name);
    const activeItem = {
      item,
      parents: this.activeItem.parents.slice(0, index),
      parentNames: [...this.activeItem.parentNames.slice(0, itemNameIndex), item.name],
      selectedItems: item.items
    };
    this.store.dispatch(setActiveItem({ activeItem }));
  }
}
