// Copyright 2022,
// Jurrit van der Ploeg

import { TestBed } from '@angular/core/testing';

import { DynamicLayoutService } from './dynamic-layout.service';

describe('DynamicLayoutService', () => {
  let service: DynamicLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
