// Copyright 2022,
// Jurrit van der Ploeg

import { Component, EventEmitter, Input, Output } from '@angular/core';

// models
import { Item } from '../item';

@Component({
  selector: 'app-archive-header',
  templateUrl: './archive-header.component.html',
  styleUrls: ['./archive-header.component.scss']
})
export class ArchiveHeaderComponent {
  @Input() title = '';
  @Input() items: Item[] = [];
  @Input() selected = '';
  @Output() setItem = new EventEmitter();

  constructor() { }

  selectItem(item: Item): void {
    this.setItem.emit(item);
  }
}
