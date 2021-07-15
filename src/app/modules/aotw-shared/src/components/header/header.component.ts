// Copyright 2021,
// Jurrit van der Ploeg

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showMenu = false;
  @Input() pageTitle: string = '';

  constructor() { }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }
}
