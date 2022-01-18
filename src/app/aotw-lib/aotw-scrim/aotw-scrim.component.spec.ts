// Copyright 2022,
// Jurrit van der Ploeg

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AotwScrimComponent } from './aotw-scrim.component';

describe('AotwScrimComponent', () => {
  let component: AotwScrimComponent;
  let fixture: ComponentFixture<AotwScrimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AotwScrimComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AotwScrimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
