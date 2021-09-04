// Copyright 2021,
// Jurrit van der Ploeg

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

//pipes
import { SearchFilterPipe } from '../shared/search-filter.pipe';
// mocks
import { listOfArchivesStub } from '../shared/search-filter.mock';

import { PortalHomeComponent } from './portal-home.component';

describe('PortalHomeComponent', () => {
  let component: PortalHomeComponent;
  let fixture: ComponentFixture<PortalHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PortalHomeComponent,
        SearchFilterPipe
      ],
      imports: [ RouterTestingModule ]
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

  it('should get searchInput from search bar', () => {
    component.listOfArchives = listOfArchivesStub;
    component.getSearchInput('reg');
    setup();

    const listItems = fixture.debugElement.nativeElement.querySelectorAll('li');
    expect(listItems.length).toEqual(1);
  });
});
