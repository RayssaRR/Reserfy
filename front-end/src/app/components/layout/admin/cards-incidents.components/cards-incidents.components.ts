import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Incident } from '../../../../models/incident/incident.model';

@Component({
  selector: 'app-card-incident',
  templateUrl: './card-incident.component.html',
  styleUrls: ['./card-incident.component.scss'],
  standalone: true, 
  imports: [CommonModule] 
})
export class CardIncidentComponent {
  @Input() incident!: Incident;
}
