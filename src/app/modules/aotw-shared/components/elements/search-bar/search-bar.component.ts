// Copyright 2021,
// Jurrit van der Ploeg

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() searchInputChange = new EventEmitter<string>();

  constructor() {}

  onSearchInput(searchInput: string): void {
    this.searchInputChange.emit(searchInput);
  }
}
