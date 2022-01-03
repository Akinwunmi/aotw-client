// Copyright 2022,
// Jurrit van der Ploeg

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { Item, ItemsResponse } from './items';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private selectedItemsSource = new BehaviorSubject<Item[]>([]);
  get selectedItems(): Item[] {
    return this.selectedItemsSource.value;
  }
  set selectedItems(items) {
    this.selectedItemsSource.next(items);
  }
  selectedItems$ = this.selectedItemsSource.asObservable();

  constructor(private http: HttpClient) {}

  fetchItems(): Observable<Item[]> {
    const url = environment.endpoints.items.path;

    return this.http.get<ItemsResponse>(url).pipe(
      map(response => response.items)
    );
  }
}
