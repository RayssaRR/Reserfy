import { Component } from '@angular/core';
import { CardsReservationsActiveComponent } from '../../../dashboard/user/cards-reservations-active.component/cards-reservations-active.component';
import { CardsReservationsFinishedComponent } from '../../../dashboard/user/cards-reservations-finished.component/cards-reservations-finished.component';
import { CardsReservationsPendingComponent } from '../../../dashboard/user/cards-reservations-pending.component/cards-reservations-pending.component';

@Component({
  selector: 'app-reservations.component',
  imports: [CardsReservationsActiveComponent, CardsReservationsFinishedComponent, CardsReservationsPendingComponent],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss',
})
export class ReservationsComponent {

}
