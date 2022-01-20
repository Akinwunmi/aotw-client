// Copyright 2022,
// Jurrit van der Ploeg

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { AotwYearPickerComponent } from './aotw-year-picker.component';

describe('AotwYearPickerComponent', () => {
  let component: AotwYearPickerComponent;
  let fixture: ComponentFixture<AotwYearPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AotwYearPickerComponent ],
      imports: [
        StoreModule.forRoot({})
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AotwYearPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
