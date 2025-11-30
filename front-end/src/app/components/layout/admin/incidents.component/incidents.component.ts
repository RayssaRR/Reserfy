import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Incident } from '../../../../models/incident/incident.model';
import { CardIncidentComponent } from '../cards-incidents.components/cards-incidents.components';
import { IncidentService } from '../../../../services/incident/incident-service';

@Component({
  selector: 'app-incidents',
  standalone: true,
  imports: [CommonModule, CardIncidentComponent],
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss'],
})
export class IncidentsComponent {
  private incidentService = inject(IncidentService);

  incidents: Incident[] = [];

  ngOnInit() {
    this.loadIncidents();
  }

  loadIncidents() {
    this.incidentService.list().subscribe({
      next: (res: Incident[]) => {
        this.incidents = res;
      },
      error: (err: any) => console.error(err),
    });
  }
}
