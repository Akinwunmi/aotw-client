// Copyright 2022,
// Jurrit van der Ploeg

import { createReducer, on } from '@ngrx/store';

import { decrement, increment, reset, set } from './year-picker.actions';

const initialState = new Date().getFullYear();
export const yearPickerReducer = createReducer(
  initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, () => initialState),
  on(set, (_, { year }) => year)
);
