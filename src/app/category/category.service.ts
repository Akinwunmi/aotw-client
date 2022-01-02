// Copyright 2022,
// Jurrit van der Ploeg

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { CategoryResponse } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  fetchCategories(): Observable<CategoryResponse> {
    const url = environment.endpoints.category.path;

    return this.http.get<CategoryResponse>(url);
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