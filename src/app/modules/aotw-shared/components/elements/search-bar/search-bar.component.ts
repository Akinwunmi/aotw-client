// Copyright 2021,
// Jurrit van der Ploeg

import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchInput = '';
  queryData = ['abc', 'def', 'ace', 'bdf'];

  constructor() { }
}
