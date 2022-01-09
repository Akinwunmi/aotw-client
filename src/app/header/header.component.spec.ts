// Copyright 2022,
// Jurrit van der Ploeg

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, ActivationEnd, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  function setup(): void {
    fixture.detectChanges();
  }

  it('should create', () => {
    setup();

    expect(component).toBeTruthy();
  });

  it('should display title of current page', () => {
    const events$ = router.events as Subject<unknown>;
    const stub = {
      data: {
        title: 'Archive'
      },
      routeConfig: {
        data: {
          label: 'Archive'
        }
      }
    } as unknown as ActivatedRouteSnapshot;
    setup();

    events$.next(new ActivationEnd(stub));
    expect(component.pageTitle).toEqual('Archive');
  });

  it('should toggle menu on click', () => {
    expect(component.showMenu).toEqual(false);
    setup();

    component.toggleMenu();
    setup();

    expect(component.showMenu).toEqual(true);
  });
});
