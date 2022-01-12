// Copyright 2022,
// Jurrit van der Ploeg

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { Item, ItemsResponse } from './items';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {

  constructor(private http: HttpClient) {}

  fetchItems(): Observable<Item[]> {
    const url = environment.endpoints.items.path;

    return this.http.get<ItemsResponse>(url).pipe(
      map(response => response.items.sort((a, b) => a.name > b.name ? 1 : -1))
    );
  }
}
