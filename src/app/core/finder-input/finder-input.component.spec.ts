import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinderInputComponent } from './finder-input.component';

describe('FinderInputComponent', () => {
  let component: FinderInputComponent;
  let fixture: ComponentFixture<FinderInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinderInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinderInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
