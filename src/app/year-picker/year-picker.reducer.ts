// Copyright 2022,
// Jurrit van der Ploeg

import { Action, createReducer, on } from '@ngrx/store';

import { decrement, increment, reset } from './year-picker.actions';

export const initialState = new Date().getFullYear();

const _yearPickerReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, () => initialState)
);

export function yearPickerReducer(state: number, action: Action): number {
  return _yearPickerReducer(state, action);
}
