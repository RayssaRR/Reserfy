import { Component, inject } from '@angular/core';
import { InternalResource } from '../../../../models/internalResource/internalResource.model';
import { InternalResourceService } from '../../../../services/internalResource/internal-resource';
import { MatDialog } from '@angular/material/dialog';
import { ResourceComponent } from '../../../resource/resource.component/resource.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogComponent } from '../../../dialog/dialog.component';

@Component({
  selector: 'app-available-resources-admin.component',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './available-resources-admin.component.html',
  styleUrls: ['./available-resources-admin.component.scss'],
})
export class AvailableResourcesAdminComponent{
  internalResources: InternalResource[] = [];
  
  private internalResourceService = inject(InternalResourceService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  constructor(private dialog: MatDialog) {}

  statusLabels: Record<string, string> = {
    DISPONIVEL: 'Disponível',
    EM_MANUTENCAO: 'Em manutenção',
    ALOCADO: 'Alocado'
  };

  ngOnInit() {
    this.loadResources();
  }

  loadResources() {
    this.internalResourceService.list().subscribe({
      next: (res: InternalResource[]) => this.internalResources = res,
      error: (err: any) => console.error(err)
    });
  }

  AddResource() {
    const dialogRef = this.dialog.open(ResourceComponent, {
      width: 'auto',
      maxWidth: '70vw', 
      data: {        
        title: 'Adicionar Novo Recurso',
        subtitle: 'Preencha os detalhes abaixo para adicionar um novo recurso',
        action: 'Salvar Recurso',
        flag: 'save'
      }, 
    });
    
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Recurso cadastrado:', result);
        this.loadResources(); 
      }
    });
  }

  openDetails(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }

  delete(resource: InternalResource) {
  const dialogRef = this.dialog.open(ResourceComponent, {
    width: 'auto',
    maxWidth: '70vw',
    data: {
      title: 'Remover Recurso',
      subtitle: `Tem certeza que deseja excluir o recurso "${resource.name}"?`,
      action: 'Confirmar Remoção',
      flag: 'delete',
      resource 
    }
  });

  dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      this.internalResourceService.delete(resource.id).subscribe({
        next: () => {
          this.abrirDialog('Remoção realizada', 'Recurso removido com sucesso!', 'check_circle', 'green');
          this.loadResources(); 
        },
        error: () => {
          this.abrirDialog('Erro na remoção', 'Ocorreu um erro ao remover o recurso interno!', 'error', 'red');
        }
      });
    }
  });
}

  edit(resource: InternalResource) {
  const dialogRef = this.dialog.open(ResourceComponent, {
    width: 'auto',
    maxWidth: '70vw',
    data: {
      title: 'Editar Recurso',
      subtitle: 'Atualize as informações do recurso abaixo.',
      action: 'Salvar Alterações',
      flag: 'edit',
      resource 
    }
  });

  dialogRef.afterClosed().subscribe((updatedResource: InternalResource | false) => {
    if (updatedResource) {
      this.internalResourceService.update(resource.id, updatedResource).subscribe({
        next: () => {
          this.abrirDialog('Edição realizada', 'Recurso atualizado com sucesso!', 'check_circle', 'green');
          this.loadResources(); 
        },
        error: () => {
          this.abrirDialog('Erro na edição', 'Ocorreu um erro ao editar o recurso interno!', 'error', 'red');
        }
      });
    }
  });
}


  abrirDialog(title: string, message: string, icon?: string, color?: string) {
    return this.dialog.open(DialogComponent, {
      width: '400px',
      data: { title, message, icon, color },
    });
  }
}
