// Copyright 2021,
// Jurrit van der Ploeg

import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() showMenu!: boolean;
  @Output() showMenuChange = new EventEmitter<boolean>();
  @HostListener('document:click', ['$event.target']) hideMenuOnClickOutside(element: HTMLElement): void {
    if (element.classList.contains('btn-menu') || element.classList.contains('icn-menu')) {
      this.showMenu = !this.showMenu;
    } else {
      this.showMenu = false;
      this.showMenuChange.emit(this.showMenu);
    }
  }

  constructor() { }
}
