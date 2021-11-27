// Copyright 2021,
// Jurrit van der Ploeg

import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'aotw-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  activeTab = 'discover';
  tabs = [
    { title: 'Search', link: 'search' },
    { title: 'Discover', link: 'discover' }
  ];

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const tab = this.tabs.find(tab => event.url.includes(tab.link));

        if (tab) {
          this.activeTab = tab.link;
        } 
      }
    });
  }
}
