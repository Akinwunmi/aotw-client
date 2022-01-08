// Copyright 2022,
// Jurrit van der Ploeg

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';

import { Item } from '../../items';

@Component({
  selector: 'app-discover-grid',
  templateUrl: './discover-grid.component.html',
  styleUrls: ['./discover-grid.component.scss']
})
export class DiscoverGridComponent implements OnInit {
  @Input() items: Item[] = [];
  @Input() parents: string[] = [];
  @Output() setItem = new EventEmitter();

  gridColumns = 2;

  constructor(
    private store: Store<{ gridColumns: number }>
  ) { }

  ngOnInit(): void {
    this.store.select('gridColumns').subscribe(gridColumns => {
      this.gridColumns = gridColumns;
    });
  }

  selectItem(item: Item): void {
    this.setItem.emit(item);
  }
}
