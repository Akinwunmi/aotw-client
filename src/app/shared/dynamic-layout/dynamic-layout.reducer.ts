// Copyright 2022,
// Jurrit van der Ploeg

import { Action, createReducer, on } from '@ngrx/store';

import { setGridColumns } from './dynamic-layout.actions';

const initialState = 2;
const _dynamicLayoutReducer = createReducer(
  initialState,
  on(setGridColumns, () => Math.ceil(window.innerWidth / 200))
);

export function dynamicLayoutReducer(state: number, action: Action): number {
  return _dynamicLayoutReducer(state, action);
}
