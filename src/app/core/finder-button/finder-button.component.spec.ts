import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinderButtonComponent } from './finder-button.component';

describe('FinderButtonComponent', () => {
  let component: FinderButtonComponent;
  let fixture: ComponentFixture<FinderButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinderButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
