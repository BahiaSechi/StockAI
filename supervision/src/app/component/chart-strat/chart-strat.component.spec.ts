import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStratComponent } from './chart-strat.component';

describe('ChartStratComponent', () => {
  let component: ChartStratComponent;
  let fixture: ComponentFixture<ChartStratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartStratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartStratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
