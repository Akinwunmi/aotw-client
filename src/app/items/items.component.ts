// Copyright 2022,
// Jurrit van der Ploeg

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

import { CategoriesService } from '../categories';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  selectedView!: string;

  constructor(
    private categoriesService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const [, category, view] = this.router.url.split('/');
    this.selectedView = view;

    forkJoin([
      this.categoriesService.updateCategory(category),
      this.categoriesService.fetchCategories()
    ]).subscribe(([, categories]) => {
      this.categoriesService.category = categories.category;
    });
  }
}
