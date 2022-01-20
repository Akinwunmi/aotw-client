// Copyright 2022,
// Jurrit van der Ploeg

import { createReducer, on } from '@ngrx/store';

import { decrement, increment, reset } from './aotw-year-picker.actions';

const initialState = new Date().getFullYear();
export const aotwYearPickerReducer = createReducer(
  initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, () => initialState)
);
