// Copyright 2022,
// Jurrit van der Ploeg

import { Injectable } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';

import { Item } from '../items';

import { ItemDetailsComponent } from './item-details.component';

@Injectable({
  providedIn: 'root'
})
export class ItemDetailsService {

  constructor() { }

  showItemDetailsElement(item: Item): void {
    const itemDetailsElement: NgElement & WithProperties<ItemDetailsComponent> =
      document.createElement('element-item-details') as NgElement &
        WithProperties<ItemDetailsComponent>;

    // @Input()
    itemDetailsElement.item = item;

    // @Output()
    itemDetailsElement.addEventListener('closed', () => {
      document.body.removeChild(itemDetailsElement);
    });
    
    document.body.appendChild(itemDetailsElement);
  }
}
