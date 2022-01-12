// Copyright 2022,
// Jurrit van der Ploeg

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { ActiveItem } from '../../active-item';
import { Item, ItemsService } from '../../items';

@Component({
  selector: 'app-discover-header',
  templateUrl: './discover-header.component.html',
  styleUrls: ['./discover-header.component.scss']
})
export class DiscoverHeaderComponent implements OnInit {
  @Output() setItem = new EventEmitter();

  title = '';
  items: Item[] = [];
  activeItemName = '';

  constructor(
    private itemsService: ItemsService,
    private store: Store<{ activeItem: ActiveItem }>
  ) { }

  ngOnInit(): void {
    this.itemsService.fetchItems().subscribe(items => {
      this.items = items;
      this.title = items[0].itemType;
    });
    this.store.select('activeItem').pipe(
      map(activeItem => activeItem.item.name)
    ).subscribe(name => {
      this.activeItemName = name;
    });
  }

  selectItem(item: Item): void {
    this.setItem.emit(item);
  }
}
