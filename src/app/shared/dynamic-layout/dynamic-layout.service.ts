// Copyright 2022,
// Jurrit van der Ploeg

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { setGridColumns } from './dynamic-layout.actions';

@Injectable({
  providedIn: 'root'
})
export class DynamicLayoutService {
  gridColumns$: Observable<number>;

  constructor(
    private store: Store<{ gridColumns: number }>
  ) {
    this.gridColumns$ = this.store.select('gridColumns');
  }

  setGridColumns(width: number): void {
    this.store.dispatch(
      setGridColumns({ width })
    );
  }
}
