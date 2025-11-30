import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';

import { AlternativeResources } from '../alternative-resources/alternative-resources';
import { PreventiveMaintenanceComponent } from '../preventive-maintenance.component/preventive-maintenance.component';
import { InternalResource } from '../../../../models/internalResource/internalResource.model';
import { InternalResourceService } from '../../../../services/internalResource/internal-resource';
import { ReportIncidentComponent } from '../report-incident.component/report-incident.component';

@Component({
  selector: 'app-resource-details',
  standalone: true,
  imports: [
    CommonModule,
    AlternativeResources,
    MatIconModule,
    PreventiveMaintenanceComponent,
  ],
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.scss'],
})
export class ResourceDetailsComponent implements OnInit {
  statusLabels: Record<string, string> = {
    DISPONIVEL: 'Disponível',
    EM_MANUTENCAO: 'Em manutenção',
    ALOCADO: 'Alocado',
    INDISPONIVEL: 'Indisponível',
  };

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private internalResourceService = inject(InternalResourceService);
  private dialog = inject(MatDialog);

  resource!: InternalResource;

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : null;

    if (id !== null) {
      this.loadResource(id);
    }
  }

  loadResource(id: number): void {
    this.internalResourceService.findById(id).subscribe({
      next: (res: InternalResource) => {
        this.resource = res;
      },
      error: (err) => {
        console.error('Erro ao carregar recurso', err);
      },
    });
  }

  goBack(): void {
    this.router.navigate(['/user/principal/internal-resources']);
  }

  reportIncident(): void {
    this.dialog.open(ReportIncidentComponent, {
      width: 'auto',
      maxWidth: '70vw',
      data: {
        resourceId: this.resource,
        resource: this.resource,
      },
    });
  }
}
