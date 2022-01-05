// Copyright 2022,
// Jurrit van der Ploeg

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { categoriesStub, CategoriesService } from '../categories';
import { ItemsService, itemsStub } from '../items';

import { DiscoverComponent } from './discover.component';
import { GridComponent } from './grid';
import { HeaderComponent } from './header';

describe('DiscoverComponent', () => {
  let component: DiscoverComponent;
  let fixture: ComponentFixture<DiscoverComponent>;
  let categoriesService: CategoriesService;
  let itemsService: ItemsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DiscoverComponent,
        GridComponent,
        HeaderComponent
      ],
      imports: [
        HttpClientTestingModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverComponent);
    component = fixture.componentInstance;
    categoriesService = TestBed.inject(CategoriesService);
    itemsService = TestBed.inject(ItemsService);
  });

  function setup(): void {
    fixture.detectChanges();
  }

  it('should create', () => {
    spyOn(categoriesService, 'fetchCategories').and.returnValue(of(categoriesStub));
    spyOn(itemsService, 'fetchItems').and.returnValue(of(itemsStub));
    setup();
    component.selectItem(itemsStub[0]);
    component.selectChildItems(itemsStub[0].items[0]);
    component.selectParentItems({ ...itemsStub[0].items[0], index: 1 });

    expect(component).toBeTruthy();
  });
});
