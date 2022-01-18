// Copyright 2022,
// Jurrit van der Ploeg

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';

import { ActiveItem } from '../active-item';
import { Item } from '../items';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  state: 'opened' | 'closed' = 'closed';

  @Input()
  get item(): Item {
    return this._item;
  }
  set item(item: Item) {
    this._item = item;
    this.state = 'opened';
  }
  private _item!: Item;

  parents!: Item[];
  parentNames!: string[];

  @Output() closed = new EventEmitter<void>();

  constructor(
    private store: Store<{ activeItem: ActiveItem }>
  ) { }

  ngOnInit(): void {
    this.store.select('activeItem').subscribe(({ parents, parentNames }) => {
      this.parents = parents;
      this.parentNames = parentNames.slice(0, -1);
    });
  }

  close(): void {
    this.closed.next();
  }
}
