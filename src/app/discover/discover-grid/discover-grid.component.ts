// Copyright 2022,
// Jurrit van der Ploeg

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Item, ItemsService } from '../../items';

@Component({
  selector: 'app-discover-grid',
  templateUrl: './discover-grid.component.html',
  styleUrls: ['./discover-grid.component.scss']
})
export class DiscoverGridComponent implements OnInit {
  items: Item[] = [];
  parentNames: string[] = []
  @Output() setItem = new EventEmitter();

  constructor(
    private itemsService: ItemsService
  ) { }

  ngOnInit(): void {
    this.itemsService.activeItem$.subscribe(activeItem => {
      this.items = activeItem.selectedItems;
      this.parentNames = activeItem.parentNames;
    });
  }

  selectItem(item: Item): void {
    const activeItem = this.itemsService.activeItem.item;
    const activeParents = this.itemsService.activeItem.parents;
    let parents = activeParents;
    if (!activeParents.includes(activeItem)) {
      parents = [...activeParents, activeItem];
    }

    this.itemsService.activeItem = {
      item,
      parents,
      parentNames: [...this.parentNames, item.name],
      selectedItems: item.items
    };
  }
}
