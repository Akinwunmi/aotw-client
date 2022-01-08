// Copyright 2022,
// Jurrit van der Ploeg

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { setGridColumns } from './dynamic-layout.actions';

@Injectable({
  providedIn: 'root'
})
export class DynamicLayoutService {

  constructor(
    private store: Store<{ gridColumns: number }>
  ) { }

  setGridColumns(width: number): void {
    this.store.dispatch(
      setGridColumns({ width })
    );
  }
}
