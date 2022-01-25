// Copyright 2022,
// Jurrit van der Ploeg

import { createAction, props } from '@ngrx/store';

export const decrement = createAction('[Year Picker Component] Decrement');
export const increment = createAction('[Year Picker Component] Increment');
export const reset = createAction('[Year Picker Component] Reset');
export const set = createAction(
  '[Year Picker Component] Set',
  props<{ year: number }>()
);
