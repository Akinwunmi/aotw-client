// Copyright 2022,
// Jurrit van der Ploeg

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { DynamicLayout } from '../dynamic-layout';
import { Item, ItemForSearch, ItemsService } from '../items';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  items!: ItemForSearch[];
  filteredItems: ItemForSearch[] = [];

  dynamicLayout!: DynamicLayout;

  constructor(
    private itemsService: ItemsService,
    private store: Store<{ dynamicLayout: DynamicLayout }>
  ) { }

  ngOnInit(): void {
    this.store.select('dynamicLayout').subscribe(dynamicLayout => {
      this.dynamicLayout = dynamicLayout;
    });

    this.itemsService.fetchItems().subscribe(items => {
      this.items = this.flattenItems(items);
    });
  }

  flattenItems(parentItems: Item[], parents?: string[]): ItemForSearch[] {
    let flattenedItems: ItemForSearch[] = [];
    parentItems.forEach(item => {
      if (!parents) {
        parents = [];
      }
      flattenedItems.push({ ...item, parents });
      flattenedItems = [
        ...flattenedItems, 
        ...this.flattenItems(item.items, [...parents, item.name])
      ];
    });
    return flattenedItems.sort((a, b) => a.name > b.name ? 1 : -1);
  }

  filterItems(searchInput: string): void {
    if (searchInput.length > 1) {
      this.filteredItems = this.items.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    } else {
      this.filteredItems = [];
    }
  }
}
