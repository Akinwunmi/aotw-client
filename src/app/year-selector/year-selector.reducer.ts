// Copyright 2022,
// Jurrit van der Ploeg

import { Action, createReducer, on } from '@ngrx/store';

import { decrement, increment, reset } from './year-selector.actions';

export const initialState = new Date().getFullYear();

const _yearSelectorReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, () => initialState)
);

export function yearSelectorReducer(state: number, action: Action): number {
  return _yearSelectorReducer(state, action);
}