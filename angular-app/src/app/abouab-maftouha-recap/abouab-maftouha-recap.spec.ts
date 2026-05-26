import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouabMaftouhaRecap } from './abouab-maftouha-recap';

describe('AbouabMaftouhaRecap', () => {
  let component: AbouabMaftouhaRecap;
  let fixture: ComponentFixture<AbouabMaftouhaRecap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbouabMaftouhaRecap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbouabMaftouhaRecap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
