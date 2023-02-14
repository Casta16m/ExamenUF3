import { TestBed } from '@angular/core/testing';

import { MuseumApiService } from './museum-api.service';

describe('MuseumApiService', () => {
  let service: MuseumApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuseumApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
