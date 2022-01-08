// Copyright 2022,
// Jurrit van der Ploeg

import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

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
  @HostListener('window:resize', ['$event']) onResize(): void {
    this.setGridColumns();
  }


  constructor() { }

  ngOnInit(): void {
    this.setGridColumns();
  }

  private setGridColumns(): void {
    this.gridColumns = Math.ceil(window.innerWidth / 200);
  }

  selectItem(item: Item): void {
    this.setItem.emit(item);
  }
}
