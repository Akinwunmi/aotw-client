// Copyright 2022,
// Jurrit van der Ploeg

import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { DynamicLayout, Layout } from '../dynamic-layout';
import { Item } from '../items';

import { VisualService } from './visual.service';

@Component({
  selector: 'app-visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.scss']
})
export class VisualComponent implements OnInit {
  @Input() item!: Item;
  @Input() parents!: string[];
  @Input() subtitle = false;

  layout!: Layout;

  constructor(
    private store: Store<{ dynamicLayout: DynamicLayout }>,
    private visualService: VisualService
  ) { }

  ngOnInit(): void {
    this.store.select('dynamicLayout').subscribe(({ layout }) => {
      this.layout = layout;
    });
  }

  getVisual(): string {
    const parents = this.parents.map(parent => this.visualService.convertStringToSlug(parent));
    const item = this.visualService.convertStringToSlug(this.item.name);
    const itemPath = (`${parents.join('/')}/${item}`).toLowerCase();

    return this.visualService.fetchVisual(itemPath);
  }
}
