// Copyright 2022,
// Jurrit van der Ploeg

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Filter } from './filters';

@Component({
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  state: 'opened' | 'closed' = 'closed';

  @Input()
  get filters(): Filter[] {
    return this._filters;
  }
  set filters(filters: Filter[]) {
    this._filters = filters;
    this.state = 'opened';
  }
  private _filters: Filter[] = [];
  selectedFilters: Filter[] = [];

  @Output() activeFilters = new EventEmitter<string[]>();
  @Output() closed = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
    this.selectedFilters = this.filters;
  }

  onChangeToggleFilter(index: number): void {
    this.selectedFilters[index].checked = !this.selectedFilters[index].checked;
  }

  onSubmit(): void {
    this.activeFilters.emit(
      this.selectedFilters
        .filter((filter) => filter.checked)
        .map((filter) => filter.name)
    );
    this.closed.next();
  }

  close(): void {
    this.activeFilters.emit(
      this.filters
        .filter((filter) => filter.checked)
        .map(filter => filter.name)
    );
    this.closed.next();
  }
}
