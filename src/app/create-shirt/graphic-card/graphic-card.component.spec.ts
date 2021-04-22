import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicCardComponent } from './graphic-card.component';

describe('GraphicCardComponent', () => {
  let component: GraphicCardComponent;
  let fixture: ComponentFixture<GraphicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
