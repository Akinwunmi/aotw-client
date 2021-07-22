// Copyright 2021,
// Jurrit van der Ploeg

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  function setup() {
    fixture.detectChanges();
  }

  it('should create', () => {
    setup();

    expect(component).toBeTruthy();
  });

  it('should display title of current page', () => {
    component.pageTitle = 'Archive of the World';
    setup();

    expect(component.pageTitle).toEqual('Archive of the World');
  });

  it('should toggle menu on click', () => {
    expect(component.showMenu).toEqual(false);
    setup();

    component.toggleMenu();
    fixture.detectChanges();

    expect(component.showMenu).toEqual(true);
  });
});
