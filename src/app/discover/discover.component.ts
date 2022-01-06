// Copyright 2022,
// Jurrit van der Ploeg

import { Component, OnInit } from '@angular/core';

import { Item, ItemsService, ItemWithIndex } from '../items';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {
  items: Item[] = [];
  title = '';

  activeItem: Item = {
    code: '',
    id: 0,
    items: [],
    itemType: '',
    name: '',
    visual: false
  };
  parents: Item[] = [];
  parentNames: string[] = [];

  constructor(
    private itemsService: ItemsService
  ) { }

  ngOnInit(): void {
    this.itemsService.fetchItems().subscribe(items => {
      this.items = items;
      this.title = items[0].itemType;
    });
    this.itemsService.activeItem$.subscribe(activeItem => {
      this.activeItem = activeItem.item;
      this.parents = activeItem.parents;
      this.parentNames = activeItem.parentNames;
    });
  }

  selectItem(item: Item): void {
    this.itemsService.activeItem = {
      item,
      parents: [],
      parentNames: [item.name],
      selectedItems: item.items
    };
  }

  selectParentItems(item: ItemWithIndex): void {
    this.itemsService.activeItem = {
      item,
      parents: this.parents.slice(0, item.index),
      parentNames: [...this.parentNames.slice(0, item.index), item.name],
      selectedItems: item.items
    };
  }
}
