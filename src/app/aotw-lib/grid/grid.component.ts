// Copyright 2022,
// Jurrit van der Ploeg

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';

import { DynamicLayout } from '../../dynamic-layout';
import { Item } from '../../items';

@Component({
  selector: 'aotw-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() parentNames!: string[];
  @Input() items!: Item[];
  @Output() setItem = new EventEmitter();

  dynamicLayout!: DynamicLayout;

  constructor(
    private store: Store<{ dynamicLayout: DynamicLayout }>
  ) { }

  ngOnInit(): void {
    this.store.select('dynamicLayout').subscribe(dynamicLayout => {
      this.dynamicLayout = dynamicLayout;
    });
  }

  selectItem(item: Item): void {
    this.setItem.emit(item);
  }
}
