import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinderTabsComponent } from './finder-tabs.component';

describe('FinderTabsComponent', () => {
  let component: FinderTabsComponent;
  let fixture: ComponentFixture<FinderTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinderTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinderTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
