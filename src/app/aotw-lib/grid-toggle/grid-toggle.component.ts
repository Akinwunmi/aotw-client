// Copyright 2022,
// Jurrit van der Ploeg

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { DynamicLayout, Layout, setLayout } from '../../dynamic-layout';

@Component({
  selector: 'aotw-grid-toggle',
  templateUrl: './grid-toggle.component.html',
  styleUrls: ['./grid-toggle.component.scss']
})
export class GridToggleComponent implements OnInit {
  views = [
    { layout: Layout.LIST, active: false },
    { layout: Layout.GRID, active: true }
  ];

  constructor(
    private store: Store<{ dynamicLayout: DynamicLayout }>
  ) { }

  ngOnInit(): void {
    this.store.select('dynamicLayout').subscribe(({ layout }) => {
      this.setView(layout);
    });
  }

  setLayout(layout: Layout): void {
    this.setView(layout);
    this.store.dispatch(setLayout({ layout }));
  }

  private setView(layout: Layout): void {
    this.views.forEach(view => view.active = (view.layout === layout) ? true : false);
  }
}
