// Copyright 2022,
// Jurrit van der Ploeg

import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { DynamicLayout, Layout } from '../../dynamic-layout';
import { Item } from '../../items';
import { convertStringToSlug } from '../../shared';

import { VisualService } from './visual.service';

@Component({
  selector: 'aotw-visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.scss']
})
export class VisualComponent implements OnInit {
  @Input() item!: Item;
  @Input() parents!: string[];
  @Input() subtitle = false;

  category!: string;
  layout!: Layout;

  constructor(
    private store: Store<{ category: string, dynamicLayout: DynamicLayout }>,
    private visualService: VisualService
  ) { }

  ngOnInit(): void {
    this.store.select('category').subscribe(category => {
      this.category = category;
    });
    this.store.select('dynamicLayout').subscribe(({ layout }) => {
      this.layout = layout;
    });
  }

  getVisual(): string {
    const parents = this.parents.map((parent) => convertStringToSlug(parent));
    const item = convertStringToSlug(this.item.name);
    const itemPath = (`${this.category}/${parents.join('/')}/${item}`).toLowerCase();

    return this.visualService.fetchVisual(itemPath);
  }
}
