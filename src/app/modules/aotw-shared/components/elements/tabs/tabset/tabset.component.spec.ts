// Copyright 2021,
// Jurrit van der Ploeg

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsetComponent } from './tabset.component';

describe('TabsetComponent', () => {
  let component: TabsetComponent;
  let fixture: ComponentFixture<TabsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsetComponent);
    component = fixture.componentInstance;
  });

  function setup(): void {
    fixture.detectChanges();
  }

  it('should create', () => {
    setup();

    expect(component).toBeTruthy();
  });

  // TODO: Add unit test for setActiveTab()
  it('should show content for active tab', () => {
    // component.setActiveTab()
    setup();
  });
});
