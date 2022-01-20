// Copyright 2022,
// Jurrit van der Ploeg

import { createAction, props } from '@ngrx/store';

export const setCategory = createAction(
  '[Categories Component] Set Category',
  props<{ category: string }>()
);
