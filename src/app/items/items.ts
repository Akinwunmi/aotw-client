// Copyright 2022,
// Jurrit van der Ploeg

export interface ItemsResponse {
  items: Item[];
}

export interface Item {
  code: string;
  id: number;
  items: Item[];
  itemType: string;
  name: string;
  nameLocal?: string; // ? Convert to Omit
  parent?: string; // ? Convert to Omit
  visual: boolean;
  visualInfo?: VisualInfo; // ? Convert to Omit
}

export interface ItemWithIndex extends Item {
  index: number;
}

export type ItemForSearch = Omit<
  Item,
  'id' | 'items' | 'itemType' | 'nameLocal' | 'visualInfo'
>; // ! Add parentNames array for visual

interface VisualInfo {
  visualType: string;
  items: {
    [key: string]: string | number;
  };
}
