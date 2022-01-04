// Copyright 2022,
// Jurrit van der Ploeg

import { Component, Input } from '@angular/core';

import { Item } from '../items';

import { VisualService } from './visual.service';

@Component({
  selector: 'app-visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.scss']
})
export class VisualComponent {
  @Input() item: Item = {
    code: '',
    id: '',
    items: [],
    itemType: '',
    name: '',
    visual: false
  };
  @Input() parents: string[] = [];

  constructor(
    private visualService: VisualService
  ) { }

  getVisual(): string {
    const parents = this.parents.map(parent => this.visualService.convertStringToSlug(parent));
    const item = this.visualService.convertStringToSlug(this.item.name);
    const itemPath = (`${parents.join('/')}/${item}`).toLowerCase();

    return this.visualService.fetchVisual(itemPath);
  }
}
