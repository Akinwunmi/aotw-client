// Copyright 2022,
// Jurrit van der Ploeg

import { Component, Injector, OnInit } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { Store } from '@ngrx/store';

import { ActiveItem, setActiveItem } from '../active-item';
import { Filter, FiltersComponent, FiltersService } from '../filters';
import { Item, ItemWithIndex } from '../items';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {
  activeItem: ActiveItem = {
    item: {
      code: '',
      id: 0,
      items: [],
      itemType: '',
      name: '',
      visual: false
    },
    parents: [],
    parentNames: [],
    selectedItems: []
  };

  constructor(
    injector: Injector,
    public filtersService: FiltersService,
    private store: Store<{ activeItem: ActiveItem }>
  ) {
    const FiltersElement = createCustomElement(FiltersComponent, { injector });
    customElements.define('element-filters', FiltersElement);
  }

  ngOnInit(): void {
    this.store.select('activeItem').subscribe(activeItem => {
      this.activeItem = activeItem;
    });
  }

  selectItem(item: Item): void {
    const activeItem = {
      item,
      parents: [],
      parentNames: [item.name],
      selectedItems: item.items
    };
    this.store.dispatch(setActiveItem({ activeItem }));
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

  selectParentItems(item: ItemWithIndex): void {
    const itemNameIndex = this.activeItem.parentNames.findIndex(parent => parent === item.name);
    const activeItem = {
      item,
      parents: this.activeItem.parents.slice(0, item.index),
      parentNames: [...this.activeItem.parentNames.slice(0, itemNameIndex), item.name],
      selectedItems: item.items
    };
    this.store.dispatch(setActiveItem({ activeItem }));
  }

  showFiltersDialog(filters: Filter[]): void {
    this.filtersService.showFiltersElement(filters);
  }

  hideFiltersDialog(): void {
    const btnFilter = document.querySelector('.filters_content__dialog');
    if (btnFilter) {
      btnFilter.innerHTML = '';
    }
  }
}
