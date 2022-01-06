// Copyright 2022,
// Jurrit van der Ploeg

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from '../../items';

@Component({
  selector: 'app-discover-header',
  templateUrl: './discover-header.component.html',
  styleUrls: ['./discover-header.component.scss']
})
export class DiscoverHeaderComponent implements OnInit {
  @Input() title = '';
  @Input() items: Item[] = [];
  @Input() selected = '';
  @Output() setItem = new EventEmitter();

  url = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.url = this.router.url.split('/').slice(0, 3).join('/');
  }

  selectItem(item: Item): void {
    this.setItem.emit(item);
  }
}
