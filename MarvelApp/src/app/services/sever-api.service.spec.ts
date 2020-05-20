import { TestBed } from '@angular/core/testing';

import { SeverAPIService } from './sever-api.service';

describe('SeverAPIService', () => {
  let service: SeverAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeverAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
