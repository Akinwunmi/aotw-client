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

  item: Item = {
    code: '',
    id: 0,
    items: [],
    itemType: '',
    name: '',
    visual: false
  };
  parents: Item[] = [];
  parentNames: string[] = [];

  constructor(
    private store: Store<{ activeItem: ActiveItem }>
  ) { }

  ngOnInit(): void {
    this.store.select('activeItem').subscribe(({ item, parents, parentNames }) => {
      this.item = item;
      this.parents = parents;
      this.parentNames = parentNames.slice(0, -1);
    });
  }

  selectItem(item: Item, index: number): void {
    this.setItem.emit({ ...item, index });
  }
}
