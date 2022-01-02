// Copyright 2022,
// Jurrit van der Ploeg

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: any[], searchInput: string, itemType?: string): any[] {    
    if (items.length === 0) {
      return [];
    }

    if (!searchInput) {
      return items;
    }
    
    searchInput = searchInput.toLowerCase();

    return items.filter(item => {
      let filteredItem = item;

      if (itemType === 'route') {
        filteredItem = item.title;
      }

      if (itemType === 'region') {
        filteredItem = item.name;
      }

      return filteredItem.toLowerCase().includes(searchInput);
    });
  }
}