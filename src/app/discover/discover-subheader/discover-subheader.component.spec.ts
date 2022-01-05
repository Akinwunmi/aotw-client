// Copyright 2022,
// Jurrit van der Ploeg

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { itemsStub } from '../../items';

import { DiscoverSubheaderComponent } from './discover-subheader.component';

describe('DiscoverSubheaderComponent', () => {
  let component: DiscoverSubheaderComponent;
  let fixture: ComponentFixture<DiscoverSubheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverSubheaderComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverSubheaderComponent);
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
    component.selectItem(itemsStub[0].items[0], 1);

    expect(component.setItem.emit).toHaveBeenCalledWith({ ...itemsStub[0].items[0], index: 1 });
  });
});
