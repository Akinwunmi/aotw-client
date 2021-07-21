// Copyright 2021,
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
      return (itemType === 'route' ? item.title : item)
        .toLowerCase()
        .includes(searchInput);
    });
  }
}