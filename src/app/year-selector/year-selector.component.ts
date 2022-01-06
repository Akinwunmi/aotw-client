// Copyright 2022,
// Jurrit van der Ploeg

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { decrement, increment, reset } from './year-selector.actions';

@Component({
  selector: 'app-year-selector',
  templateUrl: './year-selector.component.html',
  styleUrls: ['./year-selector.component.scss']
})
export class YearSelectorComponent {
  yearSelection$: Observable<number>;

  constructor(
    private store: Store<{ yearSelection: number }>
  ) {
    this.yearSelection$ = this.store.select('yearSelection');
  }

  increment(): void {
    this.store.dispatch(increment());
  }

  decrement(): void {
    this.store.dispatch(decrement());
  }

  reset(): void {
    this.store.dispatch(reset());
  }
}
