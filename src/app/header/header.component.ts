// Copyright 2022,
// Jurrit van der Ploeg

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, ActivationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { ActiveItem, setActiveItem } from '../active-item';
import { CategoriesService } from '../categories';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu = false;
  pageTitle!: string;

  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
    private store: Store<{ activeItem: ActiveItem }>,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    // get selected category and capitalize
    const category$ = this.categoriesService.category$.pipe(
      map(category => category.charAt(0).toUpperCase() + category.slice(1))
    );
    // get title from router data after activation
    const title$ = this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      map(event => (event as ActivationEnd).snapshot),
      map(snapshot => (snapshot as ActivatedRouteSnapshot).data['title'])
    );
    // assign category or title to page and document title
    combineLatest([
      category$,
      title$
    ]).subscribe(([category, title]) => {
      // set header title
      this.pageTitle = title === 'Archive' ? title : category;
      // set document title
      this.titleService.setTitle(`${this.pageTitle} of the World`);
    });
  }

  onClickResetActiveItemAndNavigateToHome(): void {
    const activeItem = {
      item: {
        code: '',
        id: 0,
        itemType: '',
        items: [],
        name: '',
        visual: false
      },
      parents: [],
      parentNames: [],
      selectedItems: [],
      filteredItems: []
    };
    this.store.dispatch(setActiveItem({ activeItem }));
    this.router.navigate(['']);
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }
}
