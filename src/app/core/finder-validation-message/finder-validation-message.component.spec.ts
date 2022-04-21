import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinderValidationMessageComponent } from './finder-validation-message.component';

describe('FinderValidationMessageComponent', () => {
  let component: FinderValidationMessageComponent;
  let fixture: ComponentFixture<FinderValidationMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinderValidationMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinderValidationMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
