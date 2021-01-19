import { TestBed } from '@angular/core/testing';

import { Q4Service } from './q4.service';

describe('Q4Service', () => {
  let service: Q4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Q4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
