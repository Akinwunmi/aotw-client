// Copyright 2022,
// Jurrit van der Ploeg

import { Component, HostListener, OnInit } from '@angular/core';

import { DynamicLayoutService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostListener('window:resize', ['$event']) onResize(): void {
    this.dynamicLayoutService.setGridColumns(window.innerWidth);
  }

  appTitle = 'Archive of the World';

  constructor(
    private dynamicLayoutService: DynamicLayoutService
  ) { }

  ngOnInit(): void {
    this.dynamicLayoutService.setGridColumns(window.innerWidth);
  }
}
