// Copyright 2022,
// Jurrit van der Ploeg

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { itemsStub } from '../../items';

import { DiscoverGridComponent } from './discover-grid.component';

describe('DiscoverGridComponent', () => {
  let component: DiscoverGridComponent;
  let fixture: ComponentFixture<DiscoverGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverGridComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverGridComponent);
    component = fixture.componentInstance;
  });

  function setup(): void {
    fixture.detectChanges();
  }

  it('should create', () => {
    setup();

    expect(component).toBeTruthy();
  });

  it('should emit set item', () => {
    spyOn(component.setItem, 'emit');
    setup();
    component.selectItem(itemsStub[0].items[0]);

    expect(component.setItem.emit).toHaveBeenCalledWith(itemsStub[0].items[0]);
  });
});
