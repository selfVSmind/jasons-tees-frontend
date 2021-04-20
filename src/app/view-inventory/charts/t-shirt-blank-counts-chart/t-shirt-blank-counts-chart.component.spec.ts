import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TShirtBlankCountsChartComponent } from './t-shirt-blank-counts-chart.component';

describe('TShirtBlankCountsChartComponent', () => {
  let component: TShirtBlankCountsChartComponent;
  let fixture: ComponentFixture<TShirtBlankCountsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TShirtBlankCountsChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TShirtBlankCountsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
