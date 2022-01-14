// Copyright 2022,
// Jurrit van der Ploeg

import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Filter } from './filters';

@Component({
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
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

  @Output() activeFilters = new EventEmitter<string[]>();
  @Output() closed = new EventEmitter<void>();

  selectedFilters: string[] = [];

  constructor() { }

  onChangeToggleFilter(index: number): void {
    this.filters[index].checked = !this.filters[index].checked;
  }

  onSubmit(): void {
    this.selectedFilters = this.filters
      .filter(filter => filter.checked)
      .map(filter => filter.name);
    this.activeFilters.emit(this.selectedFilters);
    this.closed.next();
  }

  close(): void {
    // TODO: Remove filter selection on close
    // this.activeFilters.emit(this.filters);
    this.closed.next();
  }
}
