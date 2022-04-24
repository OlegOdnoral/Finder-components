import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinderTextAreaComponent } from './finder-text-area.component';

describe('FinderTextAreaComponent', () => {
  let component: FinderTextAreaComponent;
  let fixture: ComponentFixture<FinderTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [ FinderTextAreaComponent ]
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinderTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
