// Copyright 2021,
// Jurrit van der Ploeg

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'aotw-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Input() placeholder: string = 'Search';
  @Output() searchInputChange = new EventEmitter<string>();

  constructor() {}

  onSearchInput(searchInput: string): void {
    this.searchInputChange.emit(searchInput);
  }
}
