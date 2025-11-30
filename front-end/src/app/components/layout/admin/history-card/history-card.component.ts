import { Component, Input } from '@angular/core';
import { Request } from '../../../../models/internalResource/request.model';

@Component({
  selector: 'app-history-card',
  standalone: true,
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.scss'],
})
export class HistoryCardComponent {
  @Input() request!: Request;
}
