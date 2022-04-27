import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlegComponent } from './oleg.component';

describe('OlegComponent', () => {
  let component: OlegComponent;
  let fixture: ComponentFixture<OlegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
