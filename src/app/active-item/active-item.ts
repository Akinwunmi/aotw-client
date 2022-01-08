// Copyright 2022,
// Jurrit van der Ploeg

import { Item } from '../items';

export interface ActiveItem {
  item: Item;
  parents: Item[];
  parentNames: string[];
  selectedItems: Item[];
}