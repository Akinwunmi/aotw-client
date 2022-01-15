// Copyright 2022,
// Jurrit van der Ploeg

import { createReducer, on } from '@ngrx/store';

import { ActiveItem } from './active-item';
import { setActiveItem } from './active-item.actions';

const initialState: ActiveItem = {
  item: {
    code: '',
    id: 0,
    itemType: '',
    items: [],
    name: '',
    visual: false
  },
  parents: [],
  parentNames: [],
  selectedItems: [],
  filteredItems: []
};
export const activeItemReducer = createReducer(
  initialState,
  on(setActiveItem, (_, { activeItem }) => activeItem)
);