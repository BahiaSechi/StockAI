import { TestBed } from '@angular/core/testing';

import { InfluxService } from './influx.service';

describe('InfluxService', () => {
  let service: InfluxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfluxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
