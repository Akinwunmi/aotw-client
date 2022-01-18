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
  parent?: string; // ? Convert to Omit
  visual: boolean;
  visualInfo?: VisualInfo;
}

export interface ItemWithIndex extends Item {
  index: number;
}

interface VisualInfo {
  visualType: string;
  items: [{
    [key: string]: string | number;
  }];
}
