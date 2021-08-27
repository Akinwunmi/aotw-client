// Copyright 2021,
// Jurrit van der Ploeg

import { Component, EventEmitter, Input, Output } from '@angular/core';

// interfaces
import { Filter } from './filters.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Input() filters: Filter[] = [];
  @Output() activeFilters = new EventEmitter<string[]>();
  @Output() hideFilters = new EventEmitter();

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
    this.hideFilters.emit();
  }

  onClickHideFilters(): void {
    // TODO: Remove filter selection on close
    // this.activeFilters.emit(this.filters);
    this.hideFilters.emit();
  }
}
