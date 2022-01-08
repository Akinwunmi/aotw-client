// Copyright 2022,
// Jurrit van der Ploeg

import { createAction, props } from '@ngrx/store';

export const setGridColumns = createAction(
  '[App Component] Set Grid Columns',
  props<{ width: number }>()
);
