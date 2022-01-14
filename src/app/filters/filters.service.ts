// Copyright 2022,
// Jurrit van der Ploeg

import { Injectable } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';

import { Filter } from './filters';
import { FiltersComponent } from './filters.component';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor() { }

  showFiltersElement(filters: Filter[]): void {
    const filtersElement: NgElement & WithProperties<FiltersComponent> =
      document.createElement('element-filters') as any; // ! Fix any

    filtersElement.addEventListener('closed', () => document.body.removeChild(filtersElement));
    filtersElement.filters = filters;

    document.body.appendChild(filtersElement);
  }}
