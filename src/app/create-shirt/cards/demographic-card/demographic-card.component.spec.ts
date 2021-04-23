import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemographicCardComponent } from './demographic-card.component';

describe('DemographicCardComponent', () => {
  let component: DemographicCardComponent;
  let fixture: ComponentFixture<DemographicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemographicCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemographicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
