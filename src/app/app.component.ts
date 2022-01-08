// Copyright 2022,
// Jurrit van der Ploeg

import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { setGridColumns } from './dynamic-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostListener('window:resize', ['$event']) onResize(): void {
    this.store.dispatch(
      setGridColumns()
    );
  }

  appTitle = 'Archive of the World';

  constructor(
    private store: Store<{ gridColumns: number }>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(
      setGridColumns()
    );
  }
}
