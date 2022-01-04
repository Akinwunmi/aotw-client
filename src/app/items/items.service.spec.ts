// Copyright 2022,
// Jurrit van der Ploeg

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ItemsService } from './items.service';

describe('ItemsService', () => {
  let service: ItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
