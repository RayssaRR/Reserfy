import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Incident } from '../../../../models/incident/incident.model';

@Component({
  selector: 'app-card-incident',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-incidents.components.html',
  styleUrls: ['./cards-incidents.components.scss'],
})
export class CardIncidentComponent {
  @Input() incident!: Incident;
}
