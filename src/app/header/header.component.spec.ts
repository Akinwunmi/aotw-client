// Copyright 2022,
// Jurrit van der Ploeg

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
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
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
        title: 'Archive of the World'
      },
      routeConfig: {
        data: {
          label: 'Archive of the World'
        }
      }
    } as unknown as ActivatedRouteSnapshot;
    setup();
    
    events$.next(new ActivationEnd(stub));
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
