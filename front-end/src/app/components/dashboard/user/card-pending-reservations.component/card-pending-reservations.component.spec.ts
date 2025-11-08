import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPendingReservationsComponent } from './card-pending-reservations.component';

describe('CardPendingReservationsComponent', () => {
  let component: CardPendingReservationsComponent;
  let fixture: ComponentFixture<CardPendingReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPendingReservationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPendingReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
