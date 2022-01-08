// Copyright 2022,
// Jurrit van der Ploeg

import { createReducer, on } from '@ngrx/store';

import { setGridColumns } from './dynamic-layout.actions';

const initialState = 2;
export const dynamicLayoutReducer = createReducer(
  initialState,
  on(setGridColumns, () => Math.ceil(window.innerWidth / 200))
);
