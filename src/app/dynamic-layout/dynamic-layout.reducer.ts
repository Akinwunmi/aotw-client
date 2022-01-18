// Copyright 2022,
// Jurrit van der Ploeg

import { createReducer, on } from '@ngrx/store';

import { DynamicLayout, Layout } from './dynamic-layout';
import { setGridColumns, setLayout } from './dynamic-layout.actions';

const initialState: DynamicLayout = {
  gridColumns: 2,
  layout: Layout.GRID
};
export const dynamicLayoutReducer = createReducer(
  initialState,
  on(setGridColumns, state => ({
    ...state,
    gridColumns: calculateGridColumns(state.layout)
  })),
  on(setLayout, (_, { layout }) => ({
    gridColumns: calculateGridColumns(layout),
    layout
  }))
);

function calculateGridColumns(layout: Layout): number {
  return Math.ceil(window.innerWidth / (layout === Layout.LIST ? 400 : 200));
}
