// Copyright 2021,
// Jurrit van der Ploeg

import { Component } from '@angular/core';
import { ActivatedRouteSnapshot, ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showMenu = false;
  pageTitle = '';

  constructor(
    private router: Router
    ) {
    this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      map(event => (event as ActivationEnd).snapshot),
      map(snapshot => (snapshot as ActivatedRouteSnapshot).data)
    ).subscribe(data => {
      this.pageTitle = data['title'];
    });
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }
}
