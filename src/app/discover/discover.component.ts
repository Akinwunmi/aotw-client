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
  selectedItems: Item[] = [];

  constructor(
    private itemsService: ItemsService
  ) { }

  ngOnInit(): void {
    this.itemsService.fetchItems().subscribe(items => {
      this.items = items;
      this.title = items[0].itemType;
    });
  }

  selectItem(item: Item): void {
    this.activeItem = item;
    this.parents = [];
    this.parentNames = [item.name];
    this.selectedItems = item.items;
    this.itemsService.selectedItems = item.items;
  }

  selectChildItems(item: Item): void {
    let parents = this.parents;
    if (!this.parents.includes(this.activeItem)) {
      parents = [...this.parents, this.activeItem];
    }

    this.activeItem = item;
    this.parents = parents;
    this.parentNames = [...this.parents.map(parent => parent.name), item.name];
    this.selectedItems = item.items;
  }

  selectParentItems(item: ItemWithIndex): void {
    this.activeItem = item;
    this.parents = this.parents.slice(0, item.index);
    this.parentNames = [...this.parents.map(parent => parent.name), item.name];
    this.selectedItems = item.items;
  }
}
