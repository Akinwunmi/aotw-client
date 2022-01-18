// Copyright 2022,
// Jurrit van der Ploeg

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';

import { DynamicLayout } from '../../dynamic-layout';
import { ActiveItem } from '../../active-item';
import { Item } from '../../items';

@Component({
  selector: 'app-discover-grid',
  templateUrl: './discover-grid.component.html',
  styleUrls: ['./discover-grid.component.scss']
})
export class DiscoverGridComponent implements OnInit {
  @Output() setItem = new EventEmitter();

  parentNames!: string[];
  items!: Item[];

  dynamicLayout!: DynamicLayout;

  constructor(
    private store: Store<{ activeItem: ActiveItem, dynamicLayout: DynamicLayout }>
  ) { }

  ngOnInit(): void {
    this.store.select('dynamicLayout').subscribe(dynamicLayout => {
      this.dynamicLayout = dynamicLayout;
    });

    this.store.select('activeItem').subscribe(({ parentNames, filteredItems }) => {
      this.parentNames = parentNames;
      this.items = filteredItems;
    });
  }

  selectItem(item: Item): void {
    this.setItem.emit(item);
  }
}
