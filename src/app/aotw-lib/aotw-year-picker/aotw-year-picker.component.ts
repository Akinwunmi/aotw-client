// Copyright 2022,
// Jurrit van der Ploeg

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { decrement, increment, reset } from './aotw-year-picker.actions';

@Component({
  selector: 'aotw-year-picker',
  templateUrl: './aotw-year-picker.component.html',
  styleUrls: ['./aotw-year-picker.component.scss']
})
export class AotwYearPickerComponent implements OnInit {
  currentYear = new Date().getFullYear();
  yearSelected!: number;

  constructor(
    private store: Store<{ yearSelected: number }>
  ) { }

  ngOnInit(): void {
    this.store.select('yearSelected').subscribe(yearSelected => {
      this.yearSelected = yearSelected;
    });
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
