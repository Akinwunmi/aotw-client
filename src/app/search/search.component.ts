// Copyright 2022,
// Jurrit van der Ploeg

import { Component, OnInit } from '@angular/core';

import { Item, ItemsService } from '../items';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  items!: string[]; // ! Change to ItemForSearch

  searchInput!: string;

  constructor(
    private itemsService: ItemsService
  ) { }

  ngOnInit(): void {
    this.itemsService.fetchItems().subscribe(items => {
      this.items = this.flattenItems(items).map(item => item.name);
    });
  }

  // TODO: Add parentNames array for every item
  flattenItems(items: Item[]): Item[] {
    let flattenedItems: Item[] = [];
    items.forEach(item => {
      flattenedItems.push(item);
      flattenedItems = flattenedItems.concat(this.flattenItems(item.items));
    });
    return flattenedItems.sort((a, b) => a.name > b.name ? 1 : -1);
  }

  getSearchInput(event: string): void {
    this.searchInput = event;
  }
}
