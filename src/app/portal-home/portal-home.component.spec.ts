// Copyright 2021,
// Jurrit van der Ploeg

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

//pipes
import { SearchFilterPipe } from '../shared/search-filter.pipe';
// mocks
import { archivesStub } from '../shared/search-filter.mock';

import { PortalHomeComponent } from './portal-home.component';

describe('PortalHomeComponent', () => {
  let component: PortalHomeComponent;
  let fixture: ComponentFixture<PortalHomeComponent>;
  
  const routes: Routes = [
    {
      path: 'leagues',
      loadChildren: jasmine.createSpy('loadChildren'),
      data: {
        title: 'Leagues of the World'
      }
    },
    {
      path: 'regions',
      loadChildren: jasmine.createSpy('loadChildren'),
      data: {
        title: 'Regions of the World'
      }
    },
    {
      path: 'rituals',
      loadChildren: jasmine.createSpy('loadChildren')
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PortalHomeComponent,
        SearchFilterPipe
      ],
      imports: [
        RouterTestingModule.withRoutes(routes)
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalHomeComponent);
    component = fixture.componentInstance;
  });

  function setup(): void {
    fixture.detectChanges();
  }

  it('should create', () => {
    setup();

    expect(component).toBeTruthy();
  });

  it('should get archives', () => {
    setup();

    expect(component.archives).toEqual(archivesStub);
  });

  it('should get searchInput from search bar', () => {
    setup();
    
    component.getSearchInput('reg');
    expect(component.searchInput).toEqual('reg');
  });
});
