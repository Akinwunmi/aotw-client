// Copyright 2022,
// Jurrit van der Ploeg

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(
    items: string[],
    searchInput: string,
    defaultView?: 'show' | 'hide'
  ): string[] {
    defaultView ?? 'show';

    if (items && items.length === 0) {
      return [];
    }
    if (!searchInput) {
      return defaultView === 'hide' ? [] : items;
    }

    searchInput = searchInput.toLowerCase();
    if (searchInput.length < 2) {
      return defaultView === 'hide' ? [] : this.filterItems(items, searchInput);
    }

    return this.filterItems(items, searchInput);
  }

  private filterItems(items: string[], searchInput: string): string[] {
    return items.filter((item) => item.toLowerCase().includes(searchInput));
  }
}
