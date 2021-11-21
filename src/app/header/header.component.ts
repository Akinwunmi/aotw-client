// Copyright 2021,
// Jurrit van der Ploeg

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, ActivationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy, OnInit {
  private destroy$ = new Subject();
  showMenu = false;
  pageTitle = '';

  constructor(
    private router: Router,
    private titleService: Title
  ) { }
  
  ngOnInit(): void {
  // get router event after activation and assign to page and document title
    this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      map(event => (event as ActivationEnd).snapshot),
      map(snapshot => (snapshot as ActivatedRouteSnapshot).data),
      takeUntil(this.destroy$)
    ).subscribe(data => {
      // set header title
      this.pageTitle = data['title'];
      // set document title
      this.titleService.setTitle(`${this.pageTitle} of the World`);
    });
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
