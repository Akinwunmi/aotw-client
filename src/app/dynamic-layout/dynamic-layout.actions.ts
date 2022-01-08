// Copyright 2022,
// Jurrit van der Ploeg

import { createAction, props } from '@ngrx/store';

export const setGridColumns = createAction(
  '[Dynamic Layout Service] Set Grid Columns',
  props<{ width: number }>()
);
