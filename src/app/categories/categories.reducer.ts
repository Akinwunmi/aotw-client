// Copyright 2022,
// Jurrit van der Ploeg

import { createReducer, on } from '@ngrx/store';

import { setCategory } from './categories.actions';

const initialState = '';
export const categoriesReducer = createReducer(
  initialState,
  on(setCategory, (_, { category }) => category)
);
