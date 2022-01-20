// Copyright 2022,
// Jurrit van der Ploeg

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: string[] = [];
  searchInput!: string;

  constructor(
    private categoriesService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoriesService.fetchCategories().subscribe(categories => {
      this.categories = categories.categories;
    });
  }

  getSearchInput(event: string): void {
    this.searchInput = event;
  }

  setCategory(category: string): void {
    this.categoriesService.updateCategory(category).subscribe();
    this.router.navigate(['', category]);
  }
}
