// Copyright 2021,
// Jurrit van der Ploeg

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: string[], searchInput: string): string[] {
    if (!items) {
      return [];
    }

    if (!searchInput) {
      return items;
    }
    
    searchInput = searchInput.toLowerCase();

    return items.filter(item => {
      return item.toLowerCase().includes(searchInput);
    });
  }
}