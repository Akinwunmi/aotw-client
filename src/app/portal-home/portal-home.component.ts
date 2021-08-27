// Copyright 2021,
// Jurrit van der Ploeg

import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

// models
import { Archive } from './portal-home.model';

@Component({
  selector: 'app-portal-home',
  templateUrl: './portal-home.component.html',
  styleUrls: ['./portal-home.component.scss']
})
export class PortalHomeComponent {
  listOfArchives: Archive[] = [];
  searchInput = '';

  constructor(private router: Router) {
    this.getArchivesFromRoute();
  }

  private getArchivesFromRoute(): void {
    this.listOfArchives = this.router.config
      .filter(config => config.path !== '')
      .map(archive => {
        return {
          path: archive.path as Route,
          title: archive.data?.title
        }
      });
  }

  getSearchInput(event: string): void {
    this.searchInput = event;
  }
}
