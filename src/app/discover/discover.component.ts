// Copyright 2022,
// Jurrit van der Ploeg

import { Component, Input, OnInit } from '@angular/core';

import { CategoriesService } from '../categories';
import { Item, ItemsService, ItemWithIndex } from '../items';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {
  items: Item[] = [];
  @Input() title = '';

  activeItem: Item = { id: '', code: '', name: '', items: [] };
  parents: Item[] = [];
  selectedItems: Item[] = [];

  constructor(
    private categoriesService: CategoriesService,
    private itemsService: ItemsService
  ) { }

  ngOnInit(): void {
    this.categoriesService.fetchCategories().subscribe(categories => {
      console.log(categories);
    });
    this.itemsService.fetchItems().subscribe(items => {
      this.items = items;
    });
  }

  selectItem(item: Item): void {
    this.activeItem = item;
    this.parents = [];
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
    this.selectedItems = item.items;
  }

  selectParentItems(item: ItemWithIndex): void {
    this.activeItem = item;
    this.parents = this.parents.slice(0, item.index);
    this.selectedItems = item.items;
  }
}
