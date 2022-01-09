// Copyright 2022,
// Jurrit van der Ploeg

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { YearPickerComponent } from './year-picker.component';

describe('YearPickerComponent', () => {
  let component: YearPickerComponent;
  let fixture: ComponentFixture<YearPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearPickerComponent ],
      imports: [
        StoreModule.forRoot({})
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
