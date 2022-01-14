// Copyright 2022,
// Jurrit van der Ploeg

import { Injectable } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { BehaviorSubject } from 'rxjs';

import { Filter } from './filters';
import { FiltersComponent } from './filters.component';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  private activeFiltersSource = new BehaviorSubject<string[]>([]);
  get activeFilters(): string[] {
    return this.activeFiltersSource.value;
  }
  set activeFilters(filters) {
    this.activeFiltersSource.next(filters);
  }
  activeFilters$ = this.activeFiltersSource.asObservable();

  constructor() { }

  showFiltersElement(filters: Filter[]): void {
    const filtersElement: NgElement & WithProperties<FiltersComponent> =
      document.createElement('element-filters') as NgElement & WithProperties<FiltersComponent>;

    // @Input()
    filtersElement.filters = filters;

    // @Output()
    filtersElement.addEventListener('closed', () => {
      document.body.removeChild(filtersElement);
    });
    filtersElement.addEventListener('activeFilters', (event) => {
      this.activeFilters = (event as CustomEvent).detail;
    });

    document.body.appendChild(filtersElement);
  }}
