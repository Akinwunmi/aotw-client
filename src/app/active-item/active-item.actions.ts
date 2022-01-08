// Copyright 2022,
// Jurrit van der Ploeg

import { createAction, props } from '@ngrx/store';

import { ActiveItem } from './active-item';

export const setActiveItem = createAction(
  '[Discover Component] Set Active Item',
  props<{ activeItem: ActiveItem }>()
);