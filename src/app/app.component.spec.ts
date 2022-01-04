// Copyright 2022,
// Jurrit van der Ploeg

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer';
import { HeaderComponent } from './header';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should have as title "Archive of the World"', () => {
    expect(app.appTitle).toEqual('Archive of the World');
  });
});
