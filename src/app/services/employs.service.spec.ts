import { TestBed } from '@angular/core/testing';

import { EmploysService } from './employs.service';

describe('EmploysService', () => {
  let service: EmploysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmploysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
