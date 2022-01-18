// Copyright 2022,
// Jurrit van der Ploeg

export interface DynamicLayout {
  gridColumns: number;
  layout: Layout;
}

export enum Layout {
  'GRID' = 'grid',
  'LIST' = 'list'
}