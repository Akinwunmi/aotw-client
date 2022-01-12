// Copyright 2022,
// Jurrit van der Ploeg

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';

import { ActiveItem } from '../../active-item';
import { Item } from '../../items';

@Component({
  selector: 'app-discover-subheader',
  templateUrl: './discover-subheader.component.html',
  styleUrls: ['./discover-subheader.component.scss']
})
export class DiscoverSubheaderComponent implements OnInit {
  @Output() setItem = new EventEmitter();

  activeItemName = '';
  parents: Item[] = [];

  constructor(
    private store: Store<{ activeItem: ActiveItem }>
  ) { }

  ngOnInit(): void {
    this.store.select('activeItem').subscribe(({ item, parents }) => {
      this.activeItemName = item.name;
      this.parents = parents;
    });
  }

  selectItem(item: Item, index: number): void {
    this.setItem.emit({ ...item, index });
  }
}
