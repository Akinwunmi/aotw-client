// Copyright 2022,
// Jurrit van der Ploeg

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverComponent } from './discover.component';
import { GridComponent } from './grid';
import { HeaderComponent } from './header';

describe('DiscoverComponent', () => {
  let component: DiscoverComponent;
  let fixture: ComponentFixture<DiscoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DiscoverComponent,
        GridComponent,
        HeaderComponent
      ],
      imports: [
        HttpClientTestingModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
