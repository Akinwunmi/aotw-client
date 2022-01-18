// Copyright 2022,
// Jurrit van der Ploeg

import { Component, HostListener, Injector, OnInit } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { Store } from '@ngrx/store';

import { setGridColumns } from './dynamic-layout';
import { FiltersComponent } from './filters';
import { ItemDetailsComponent } from './item-details';

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
    private injector: Injector,
    private store: Store<{ gridColumns: number }>
  ) {
    const FiltersElement = createCustomElement(
      FiltersComponent,
      { injector: this.injector }
    );
    customElements.define('element-filters', FiltersElement);

    const ItemDetailsElement = createCustomElement(
      ItemDetailsComponent,
      { injector: this.injector }
    );
    customElements.define('element-item-details', ItemDetailsElement);
  }

  ngOnInit(): void {
    this.store.dispatch(
      setGridColumns()
    );
  }
}
