import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinderRadioComponent } from './finder-radio.component';

describe('FinderRadioComponent', () => {
  let component: FinderRadioComponent;
  let fixture: ComponentFixture<FinderRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinderRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinderRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
