// Copyright 2021,
// Jurrit van der Ploeg

import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-portal-home',
  templateUrl: './portal-home.component.html',
  styleUrls: ['./portal-home.component.scss']
})
export class PortalHomeComponent {
  listOfArchives: Route[] = [];

  constructor(private router: Router) {
    this.listOfArchives = this.router.config.filter(config => config.path !== '');
  }
}
