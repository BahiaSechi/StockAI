import { TestBed } from '@angular/core/testing';

import { StrategieService } from './strategie.service';

describe('StrategieService', () => {
  let service: StrategieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrategieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
