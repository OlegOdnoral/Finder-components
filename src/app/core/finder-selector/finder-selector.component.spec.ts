import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinderSelectorComponent } from './finder-selector.component';

describe('FinderSelectorComponent', () => {
  let component: FinderSelectorComponent;
  let fixture: ComponentFixture<FinderSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinderSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinderSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
