import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgSelectModule } from '@ng-select/ng-select';
import { InternalResourceService } from '../../../services/internalResource/internal-resource';
import { DialogComponent } from '../../dialog/dialog.component';
import { InternalResource } from '../../../models/internalResource/internalResource.model';

@Component({
  selector: 'app-resource',
  standalone: true,
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule, NgSelectModule],
})
export class ResourceComponent {

  categories: string[] = [
    'Equipamentos de TI',
    'Infraestrutura e Acessórios',
    'Mobiliário',
    'Recursos Audiovisuais',
    'Material de Escritório',
    'Ambientes / Salas',
    'Veículos / Mobilidade',
    'Equipamentos Operacionais',
    'Serviços Internos',
    'Outros'
  ];

  statusList = [
    { value: 'DISPONIVEL', label: 'Disponível' },
    { value: 'EM_MANUTENCAO', label: 'Em manutenção' },
    { value: 'ALOCADO', label: 'Alocado' }
  ];

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<ResourceComponent>,
    private internalResourceService: InternalResourceService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      name: [{ value: data.resource?.name || '', disabled: data.flag === 'delete' }, Validators.required],
      category: [{ value: data.resource?.category || '', disabled: data.flag === 'delete' }, Validators.required],
      location: [{ value: data.resource?.location || '', disabled: data.flag === 'delete' }, Validators.required],
      status: [{ value: data.resource?.status || '', disabled: data.flag === 'delete' }, Validators.required],
      description: [{ value: data.resource?.description || '', disabled: data.flag === 'delete' }, Validators.required]
    });
  }

  cancel() {
    this.dialogRef.close(false); 
  }

  onSubmit() {
    if (this.data.flag === 'save') {
      this.salvarRecurso();
    } else if (this.data.flag === 'delete') {
      this.confirmarDelete();
    } else if (this.data.flag === 'edit'){
      this.edit();
    }
  }

  private salvarRecurso() {
    if (this.form.invalid) {
      this.abrirDialog('Erro no cadastro', 'Todos os campos devem estar preenchidos!', 'error', 'red');
      return;
    }

    const payload = this.form.value;

    this.internalResourceService.save(payload).subscribe({
      next: () => {
        const dialogRef = this.abrirDialog('Adição realizada', 'Recurso adicionado com sucesso!', 'check_circle', 'green');
        dialogRef.afterClosed().subscribe(() => this.dialogRef.close(payload));
      },
      error: () => {
        this.abrirDialog('Erro no cadastro', 'Ocorreu um erro ao cadastrar o recurso interno!', 'error', 'red');
      }
    });
  }

  private confirmarDelete() {
    this.dialogRef.close(true);
  }

  private edit() {
    if (this.form.invalid) {
      this.abrirDialog('Erro na edição', 'Todos os campos devem estar preenchidos!', 'error', 'red');
      return;
    }

    const payload: InternalResource = {
      id: this.data.resource.id,          
      name: this.form.value.name,
      category: this.form.value.category,
      location: this.form.value.location,
      status: this.form.value.status,
      description: this.form.value.description
    };

    this.dialogRef.close(payload);
  }

  abrirDialog(title: string, message: string, icon?: string, color?: string) {
    return this.dialog.open(DialogComponent, {
      width: '400px',
      data: { title, message, icon, color },
    });
  }
}
