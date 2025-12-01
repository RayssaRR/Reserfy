import { Component, Input } from '@angular/core';
import { Request } from '../../../../models/request/request.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.scss'],
})
export class HistoryCardComponent {
  @Input() request!: Request;
}
