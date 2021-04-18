import { TestBed } from '@angular/core/testing';

import { CheckdataService } from './checkdata.service';

describe('CheckdataService', () => {
  let service: CheckdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
