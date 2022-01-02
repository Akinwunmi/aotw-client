// Copyright 2022,
// Jurrit van der Ploeg

export interface ItemsResponse {
  items: Item[];
}

export interface Item {
  id: string;
  code: string;
  name: string;
  items: Item[];
}

export interface ItemWithIndex extends Item {
  index: number;
}

export interface SelectedItems {
  parents: Item[];
  activeItem: Item;
}
