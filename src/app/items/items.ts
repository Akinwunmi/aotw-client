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

export interface ItemForSearch extends Item {
  parents: string[];
};

interface VisualInfo {
  visualType: string;
  items: {
    [key: string]: string | number;
  };
}
