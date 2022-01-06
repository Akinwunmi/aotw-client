// Copyright 2022,
// Jurrit van der Ploeg

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { ActiveItem, Item, ItemsResponse } from './items';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private activeItemSource = new BehaviorSubject<ActiveItem>({
    item: {
      code: '',
      id: 0,
      items: [],
      itemType: '',
      name: '',
      visual: false
    },
    parents: [],
    parentNames: [],
    selectedItems: []
  });
  get activeItem(): ActiveItem {
    return this.activeItemSource.value;
  }
  set activeItem(item) {
    this.activeItemSource.next(item);
    console.log(this.activeItem);
  }
  activeItem$ = this.activeItemSource.asObservable();

  constructor(private http: HttpClient) {}

  fetchItems(): Observable<Item[]> {
    const url = environment.endpoints.items.path;

    return this.http.get<ItemsResponse>(url).pipe(
      map(response => response.items)
    );
  }
}
