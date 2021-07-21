// Copyright 2021,
// Jurrit van der Ploeg

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SearchFilterPipe } from '../../modules/aotw-shared/pipes/search-filter.pipe';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
