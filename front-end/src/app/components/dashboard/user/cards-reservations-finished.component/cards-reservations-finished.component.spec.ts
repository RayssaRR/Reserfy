import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsReservationsFinishedComponent } from './cards-reservations-finished.component';

describe('CardsReservationsFinishedComponent', () => {
  let component: CardsReservationsFinishedComponent;
  let fixture: ComponentFixture<CardsReservationsFinishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsReservationsFinishedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsReservationsFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
