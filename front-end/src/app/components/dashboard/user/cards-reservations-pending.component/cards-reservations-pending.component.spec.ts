import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsReservationsPendingComponent } from './cards-reservations-pending.component';

describe('CardsReservationsPendingComponent', () => {
  let component: CardsReservationsPendingComponent;
  let fixture: ComponentFixture<CardsReservationsPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsReservationsPendingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsReservationsPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
