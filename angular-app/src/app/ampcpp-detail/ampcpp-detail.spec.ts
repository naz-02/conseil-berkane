import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpcppDetail } from './ampcpp-detail';

describe('AmpcppDetail', () => {
  let component: AmpcppDetail;
  let fixture: ComponentFixture<AmpcppDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmpcppDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmpcppDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
