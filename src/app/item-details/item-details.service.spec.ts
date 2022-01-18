// Copyright 2022,
// Jurrit van der Ploeg

import { TestBed } from '@angular/core/testing';

import { ItemDetailsService } from './item-details.service';

describe('ItemDetailsService', () => {
  let service: ItemDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
