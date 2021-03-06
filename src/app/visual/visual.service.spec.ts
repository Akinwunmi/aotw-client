// Copyright 2022,
// Jurrit van der Ploeg

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { VisualService } from './visual.service';

describe('VisualService', () => {
  let service: VisualService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(VisualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
