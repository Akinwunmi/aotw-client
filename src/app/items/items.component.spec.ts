// Copyright 2022,
// Jurrit van der Ploeg

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TabsComponent } from '../tabs';

import { ItemsComponent } from './items.component';

describe('ItemsComponent', () => {
  let component: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ItemsComponent,
        TabsComponent
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
