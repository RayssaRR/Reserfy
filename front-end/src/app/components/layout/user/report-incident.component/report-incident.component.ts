import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { InternalResource } from '../../../../models/internalResource/internalResource.model';
import { DialogComponent } from '../../../dialog/dialog.component';
import { IncidentService } from '../../../../services/incident/incident-service';
import { Incident } from '../../../../models/incident/incident.model';

@Component({
  selector: 'app-report-incident',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: './report-incident.component.html',
  styleUrls: ['./report-incident.component.scss'],
})
export class ReportIncidentComponent {
  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);
  private incidentService = inject(IncidentService);
  private dialogRef = inject(MatDialogRef<ReportIncidentComponent>);
  private dialog = inject(MatDialog);
  data: { resource: InternalResource } = inject(MAT_DIALOG_DATA);

  form: FormGroup = this.fb.group({
    name: [{ value: this.data.resource?.name || '', disabled: true }],
    description: ['', [Validators.required, Validators.minLength(5)]],
    dateIncident: [null, Validators.required],
    severity: ['MEDIA', Validators.required],
    status: ['ABERTO', Validators.required],
  });


  cancel(): void {
    this.dialogRef.close(false);
  }

  submit(): void {

    if (this.form.invalid) {
      this.abrirDialog(
        'Erro no cadastro',
        'Todos os campos devem estar preenchidos!',
        'error',
        'red'
      );
      return;
    }

    const payload: Incident = {
    name: this.data.resource.name,
    description: this.form.get('description')?.value,
    dateIncident: this.form.get('dateIncident')?.value,
    severity: this.form.get('severity')?.value,
    resourceId: this.data.resource.id,    
    status: 'ABERTO', 
    };

    


    this.incidentService.save(this.data.resource.id, payload).subscribe({
      next: () => {
        const dialogRef = this.abrirDialog(
          'Incidente notificado',
          'Incidente adicionado com sucesso!',
          'check_circle',
          'green'
        );
        dialogRef.afterClosed().subscribe(() => this.dialogRef.close(payload));
      },
      error: () => {
        this.abrirDialog(
          'Erro no cadastro',
          'Ocorreu um erro ao cadastrar o incidente ocorrido!',
          'error',
          'red'
        );
      },
    });
  }

  abrirDialog(title: string, message: string, icon?: string, color?: string) {
    return this.dialog.open(DialogComponent, {
      width: '400px',
      data: { title, message, icon, color },
    });
  }
}
