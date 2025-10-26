import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardhome } from './cardhome';

describe('Cardhome', () => {
  let component: Cardhome;
  let fixture: ComponentFixture<Cardhome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardhome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cardhome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
