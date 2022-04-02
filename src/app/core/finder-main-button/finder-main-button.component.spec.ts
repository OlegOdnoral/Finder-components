import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinderMainButtonComponent } from './finder-main-button.component';

describe('FinderMainButtonComponent', () => {
  let component: FinderMainButtonComponent;
  let fixture: ComponentFixture<FinderMainButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinderMainButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinderMainButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
