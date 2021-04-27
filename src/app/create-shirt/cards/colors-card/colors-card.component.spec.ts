import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsCardComponent } from './colors-card.component';

describe('ColorsCardComponent', () => {
  let component: ColorsCardComponent;
  let fixture: ComponentFixture<ColorsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
