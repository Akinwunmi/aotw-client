// Copyright 2022,
// Jurrit van der Ploeg

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AotwGridToggleComponent } from './aotw-grid-toggle.component';

describe('AotwGridToggleComponent', () => {
  let component: AotwGridToggleComponent;
  let fixture: ComponentFixture<AotwGridToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AotwGridToggleComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AotwGridToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
