import { TestBed } from '@angular/core/testing';

import { TradingTrainingService } from './trading-training.service';

describe('TradingTrainingService', () => {
  let service: TradingTrainingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradingTrainingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
