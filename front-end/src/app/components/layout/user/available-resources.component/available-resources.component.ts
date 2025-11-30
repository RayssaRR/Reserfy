import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { InternalResourceService } from '../../../../services/internalResource/internal-resource';
import { InternalResource } from '../../../../models/internalResource/internalResource.model';

type ResourceStatus = 'DISPONIVEL' | 'EM_MANUTENCAO' | 'ALOCADO' | 'INDISPONIVEL';

@Component({
  selector: 'app-available-resources',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './available-resources.component.html',
  styleUrls: ['./available-resources.component.scss'],
})
export class AvailableResourcesComponent implements OnInit {

  statusLabels: Record<ResourceStatus, string> = {
    DISPONIVEL: 'Disponível',
    EM_MANUTENCAO: 'Em manutenção',
    ALOCADO: 'Alocado',
    INDISPONIVEL: 'Indisponível'
  };

  internalResources: InternalResource[] = [];

  private internalResourceService = inject(InternalResourceService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  constructor() {}

  ngOnInit() {
    this.internalResourceService.list().subscribe({
      next: (res: InternalResource[]) => {
        this.internalResources = res;
      },
      error: (err: any) => console.error(err)
    });
  }

  openDetails(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }

  getStatusLabel(status: string): string {
    if (status === 'ALOCADO' || status === 'EM_MANUTENCAO') {
      return this.statusLabels['INDISPONIVEL'];
    }
    return this.statusLabels[status as ResourceStatus];
  }

  getStatusClass(status: string): string {
    if (status === 'ALOCADO' || status === 'EM_MANUTENCAO') {
      return 'status-indisponivel';
    }
    return 'status-' + status.toLowerCase();
  }
}
