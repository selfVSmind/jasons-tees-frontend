import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificationsCardComponent } from './specifications-card.component';

describe('SpecificationsCardComponent', () => {
  let component: SpecificationsCardComponent;
  let fixture: ComponentFixture<SpecificationsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificationsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificationsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
