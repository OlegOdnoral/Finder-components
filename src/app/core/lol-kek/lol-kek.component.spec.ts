import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LolKekComponent } from './lol-kek.component';

describe('LolKekComponent', () => {
  let component: LolKekComponent;
  let fixture: ComponentFixture<LolKekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LolKekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LolKekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
