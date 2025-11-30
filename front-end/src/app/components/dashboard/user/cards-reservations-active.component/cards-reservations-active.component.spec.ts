import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsReservationsActiveComponent } from './cards-reservations-active.component';

describe('CardsReservationsActiveComponent', () => {
  let component: CardsReservationsActiveComponent;
  let fixture: ComponentFixture<CardsReservationsActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsReservationsActiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsReservationsActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
