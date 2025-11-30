import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Incident } from '../../../../models/incident/incident.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CardIncidentComponent } from '../cards-incidents.components/cards-incidents.components';
import { IncidentService } from '../../../../services/incident/incident-service';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss'],
  standalone: true,
  imports: [CommonModule, CardIncidentComponent],
})
export class IncidentsComponent {
  private incidentService = inject(IncidentService);

  incidents: Incident[] = [];

  ngOnInit() {
    this.loadIncidents();
  }

  loadIncidents() {
    this.incidentService.list().subscribe({
      next: (res: Incident[]) => 
        {this.incidents = res},
      error: (err: any) => console.error(err),
    });
  }
}
