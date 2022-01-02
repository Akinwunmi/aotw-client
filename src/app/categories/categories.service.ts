// Copyright 2022,
// Jurrit van der Ploeg

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { CategoriesResponse } from './categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient
  ) { }

  fetchCategories(): Observable<CategoriesResponse> {
    const url = environment.endpoints.category.path;

    return this.http.get<CategoriesResponse>(url);
  }

  updateCategory(category: string): Observable<string> {
    const url = environment.endpoints.category.path;
    const body = {
      category
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.put<string>(url, body, httpOptions);
  }
}