import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceRequest } from '../../../../models/request/request.model';

@Component({
  selector: 'app-history-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.scss'],
})
export class HistoryCardComponent {
}
