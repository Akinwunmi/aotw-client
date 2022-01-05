// Copyright 2022,
// Jurrit van der Ploeg

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { itemsStub } from '../../items';

import { DiscoverHeaderComponent } from './discover-header.component';

describe('DiscoverHeaderComponent', () => {
  let component: DiscoverHeaderComponent;
  let fixture: ComponentFixture<DiscoverHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverHeaderComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverHeaderComponent);
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
