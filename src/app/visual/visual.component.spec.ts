// Copyright 2022,
// Jurrit van der Ploeg

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualComponent } from './visual.component';

describe('VisualComponent', () => {
  let component: VisualComponent;
  let fixture: ComponentFixture<VisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualComponent ],
      imports: [
        HttpClientTestingModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
