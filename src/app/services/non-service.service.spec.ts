import { TestBed } from '@angular/core/testing';

import { NonServiceService } from './non-service.service';

describe('NonServiceService', () => {
  let service: NonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
