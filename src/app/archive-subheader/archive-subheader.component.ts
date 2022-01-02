// Copyright 2022,
// Jurrit van der Ploeg

import { Component, EventEmitter, Input, Output } from '@angular/core';

// models
import { Item } from '../item';

@Component({
  selector: 'app-archive-subheader',
  templateUrl: './archive-subheader.component.html',
  styleUrls: ['./archive-subheader.component.scss']
})
export class ArchiveSubheaderComponent {
  @Input() active: Item = { id: '', code: '', name: '', items: [] };
  @Input() items: Item[] = [];
  @Output() setItem = new EventEmitter();

  constructor() { }

  selectItem(item: Item, index: number): void {
    this.setItem.emit({ ...item, index });
  }
}
