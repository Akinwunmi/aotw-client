// Copyright 2022,
// Jurrit van der Ploeg

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'aotw-search-bar',
  templateUrl: './aotw-search-bar.component.html',
  styleUrls: ['./aotw-search-bar.component.scss']
})
export class AotwSearchBarComponent {
  @Input() placeholder = 'Search';
  @Output() searchInputChange = new EventEmitter<string>();

  constructor() {}

  onSearchInput(searchInput: string): void {
    this.searchInputChange.emit(searchInput);
  }
}
