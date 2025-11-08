import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNextReservationsComponent } from './card-next-reservations.component';

describe('CardNextReservationsComponent', () => {
  let component: CardNextReservationsComponent;
  let fixture: ComponentFixture<CardNextReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardNextReservationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNextReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
