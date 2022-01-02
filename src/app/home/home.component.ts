// Copyright 2022,
// Jurrit van der Ploeg

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// models
import { Archive } from './archive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  archives: Archive[] = [];
  searchInput = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.archives = this.router.config
      .filter(config => config.path !== '')
      .map(config => {
        const { path, data } = config;

        return {
          path: path as string,
          title: data ? data.title : path
        };
      });
  }
  
  getSearchInput(event: string): void {
    this.searchInput = event;
  }
}
