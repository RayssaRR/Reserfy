import { Component, inject } from '@angular/core';
import { AlternativeResources } from '../alternative-resources/alternative-resources';
import { InternalResource } from '../../../../models/internalResource/internalResource.model';
import { ActivatedRoute, Router } from '@angular/router';
import { InternalResourceService } from '../../../../services/internalResource/internal-resource';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PreventiveMaintenanceComponent } from '../preventive-maintenance.component/preventive-maintenance.component';

@Component({
  selector: 'app-resource-details',
  imports: [CommonModule,AlternativeResources, MatIconModule,PreventiveMaintenanceComponent],
  templateUrl: './resource-details.component.html',
  styleUrl: './resource-details.component.scss',
})
export class ResourceDetailsComponent {
   statusLabels: Record<string, string> = {
    DISPONIVEL: 'Disponível',
    EM_MANUTENCAO: 'Em manutenção',
    ALOCADO: 'Alocado',
    INDISPONIVEL: 'Indisponível'
  };

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private internalResourceService = inject(InternalResourceService);

  resource!: InternalResource;

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : null;

    if (id !== null) {
      this.loadResource(id);
    }
  }

  loadResource(id: number) {
    this.internalResourceService.findById(id).subscribe({
      next: (res: InternalResource) => {
        this.resource = res;
      },
      error: (err) => {
        console.error('Erro ao carregar recurso', err);
      }
    });
  }

  goBack(){
    this.router.navigate(['/user/principal/internal-resources']);
  }

  reportIncident(){}
}

