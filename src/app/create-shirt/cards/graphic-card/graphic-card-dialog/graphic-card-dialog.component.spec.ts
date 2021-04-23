import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicCardDialogComponent } from './graphic-card-dialog.component';

describe('GraphicCardDialogComponent', () => {
  let component: GraphicCardDialogComponent;
  let fixture: ComponentFixture<GraphicCardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicCardDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
