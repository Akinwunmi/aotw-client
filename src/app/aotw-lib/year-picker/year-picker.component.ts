// Copyright 2022,
// Jurrit van der Ploeg

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { decrement, increment, reset, set } from './year-picker.actions';

@Component({
  selector: 'aotw-year-picker',
  templateUrl: './year-picker.component.html',
  styleUrls: ['./year-picker.component.scss']
})
export class YearPickerComponent implements OnInit {
  @ViewChild('year') year!: ElementRef<HTMLInputElement>;

  currentYear = new Date().getFullYear();
  yearSelected!: number;
  
  editing = false;
  pendingYearSelected!: number;

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

  edit(): void {
    this.pendingYearSelected = this.yearSelected;
    this.editing = true;
    setTimeout(() => {
      this.year.nativeElement.focus();
    });
  }

  cancel(): void {
    this.editing = false;
  }

  set(): void {
    // NOTE: Convert pendingYearSelected to a number, otherwise NgRx reads it as a string (!)
    this.store.dispatch(set({ year: Number(this.pendingYearSelected) }));
    this.editing = false;
  }
}
