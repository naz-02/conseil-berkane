import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session12 } from './session-12';

describe('Session12', () => {
  let component: Session12;
  let fixture: ComponentFixture<Session12>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Session12]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Session12);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
