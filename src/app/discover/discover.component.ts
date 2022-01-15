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
    selectedItems: [],
    filteredItems: []
  };
  filters: Filter[] = [];

  constructor(
    private injector: Injector,
    private filtersService: FiltersService,
    private store: Store<{ activeItem: ActiveItem }>
  ) {
    const FiltersElement = createCustomElement(
      FiltersComponent,
      { injector: this.injector }
    );
    customElements.define('element-filters', FiltersElement);
  }

  ngOnInit(): void {
    this.filtersService.activeFilters$.subscribe(activeFilters => {
      const activeItem: ActiveItem = {
        ...this.activeItem,
        filteredItems: this.activeItem.selectedItems.filter(({ itemType }) =>
          activeFilters.includes(itemType)
        )
      };
      this.store.dispatch(setActiveItem({ activeItem }));
      this.filters.forEach(filter => {
        if (!activeFilters.includes(filter.name)) {
          filter.checked = false;
        }
      });
    });

    this.store.select('activeItem').subscribe(activeItem => {
      this.activeItem = activeItem;
      const itemTypes = [
        ...new Set(activeItem.selectedItems.map(({ itemType }) => itemType))
      ];
      this.filters = itemTypes.map(itemType => ({
        name: itemType,
        checked: true
      }));
    });
  }

  setActiveItem(item: Item | ItemWithIndex, level: 'main' | 'parent' | 'children'): void {
    let parents: Item[] = [];
    let parentNames: string[] = [];
    switch (level) {
      case 'main':
        parentNames = [item.name];
        break;
      case 'parent':
        parents = this.activeItem.parents.slice(0, (item as ItemWithIndex).index);
        const itemNameIndex = this.activeItem.parentNames.findIndex(
          parent => parent === item.name
        );
        parentNames = [
          ...this.activeItem.parentNames.slice(0, itemNameIndex),
          item.name,
        ];
        break;
      case 'children':
        parents = this.activeItem.parents;
        if (!this.activeItem.parents.includes(this.activeItem.item)) {
          parents = [...this.activeItem.parents, this.activeItem.item];
        }
        parentNames = [...this.activeItem.parentNames, item.name];
        break;
      default:
        break;
    }

    const activeItem: ActiveItem = {
      item,
      parents,
      parentNames,
      selectedItems: item.items,
      filteredItems: item.items
    };
    this.store.dispatch(setActiveItem({ activeItem }));
  }

  toggleFiltersDialog(): void {
    const filterButton = document.querySelector('.filters_content__dialog');
    filterButton
      ? filterButton.innerHTML = ''
      : this.filtersService.showFiltersElement(this.filters);
  }
}
