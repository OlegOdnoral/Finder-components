import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinderCheckboxComponent } from './finder-checkbox.component';

describe('FinderCheckboxComponent', () => {
  let component: FinderCheckboxComponent;
  let fixture: ComponentFixture<FinderCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinderCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinderCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
