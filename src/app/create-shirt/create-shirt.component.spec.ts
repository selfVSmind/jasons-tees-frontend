import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShirtComponent } from './create-shirt.component';

describe('CreateShirtComponent', () => {
  let component: CreateShirtComponent;
  let fixture: ComponentFixture<CreateShirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateShirtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateShirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
