// Copyright 2022,
// Jurrit van der Ploeg

import { createAction, props } from '@ngrx/store';

import { Layout } from './dynamic-layout';

export const setGridColumns = createAction(
  '[App Component] Set Grid Columns'
);
export const setLayout = createAction(
  '[Grid Toggle Component] Set Layout',
  props<{ layout: Layout }>()
);
