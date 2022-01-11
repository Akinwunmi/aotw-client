// Copyright 2022,
// Jurrit van der Ploeg

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridToggleComponent } from './grid-toggle.component';

describe('GridToggleComponent', () => {
  let component: GridToggleComponent;
  let fixture: ComponentFixture<GridToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridToggleComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
