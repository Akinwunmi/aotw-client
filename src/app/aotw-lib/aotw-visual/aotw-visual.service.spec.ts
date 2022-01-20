// Copyright 2022,
// Jurrit van der Ploeg

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AotwVisualService } from './aotw-visual.service';

describe('AotwVisualService', () => {
  let service: AotwVisualService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(AotwVisualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
