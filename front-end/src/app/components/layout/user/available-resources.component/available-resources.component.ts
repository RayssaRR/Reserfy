import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { InternalResourceService } from '../../../../services/internalResource/internal-resource';
import { InternalResource } from '../../../../models/internalResource/internalResource.model';
import { CommonModule } from '@angular/common';
import { ResourceComponent } from '../../../resource/resource.component/resource.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-available-resources',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './available-resources.component.html',
  styleUrls: ['./available-resources.component.scss'],
})
export class AvailableResourcesComponent implements OnInit {

  statusLabels: Record<string, string> = {
    DISPONIVEL: 'Disponível',
    EM_MANUTENCAO: 'Em manutenção',
    ALOCADO: 'Alocado'
  };

  internalResources: InternalResource[] = [];

  private internalResourceService = inject(InternalResourceService);

  constructor(private dialog: MatDialog){}

  openModal() {
    const dialogRef = this.dialog.open(ResourceComponent, {
      width: 'auto',
      maxWidth: '70vw', 
      data: {}, 
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Recurso cadastrado:', result);
      }
    });
  }

  ngOnInit() {
    this.internalResourceService.list().subscribe({
      next: (res: InternalResource[]) => {
        this.internalResources = res;
      },
      error: (err: any) => console.error(err)
    });
  }



}
