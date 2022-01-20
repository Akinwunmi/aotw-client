// Copyright 2022,
// Jurrit van der Ploeg

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AotwVisualComponent } from './aotw-visual.component';

describe('AotwVisualComponent', () => {
  let component: AotwVisualComponent;
  let fixture: ComponentFixture<AotwVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AotwVisualComponent ],
      imports: [
        HttpClientTestingModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AotwVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
