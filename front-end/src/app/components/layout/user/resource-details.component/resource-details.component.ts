import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { InternalResourceService } from '../../../../services/internalResource/internal-resource';
import { RequestService } from '../../../../services/request/request';
import { InternalResource } from '../../../../models/internalResource/internalResource.model';
import { ResourceRequest } from '../../../../models/request/request.model';
import { AuthService } from '../../../../auth/services/auth.service';
import { IncidentComponent } from '../incident.component/incident.component';


@Component({
  selector: 'app-resource-details',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.scss']
})
export class ResourceDetailsComponent implements OnInit {
  resource!: InternalResource;
  requestForm!: FormGroup;
  loggedUserId!: string;

  constructor(
    private fb: FormBuilder,
    private internalResourceService: InternalResourceService,
    private requestService: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private dialog: MatDialog
  ) {
    this.requestForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      justification: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const userId = this.authService.getUserId();
    if (!userId) {
      alert('Erro: usuário não autenticado!');
      this.router.navigate(['/login']);
      return;
    }
    this.loggedUserId = userId;

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) this.loadResource(id);
  }

  loadResource(id: number): void {
    this.internalResourceService.findById(id).subscribe({
      next: res => (this.resource = res),
      error: err => console.error(err)
    });
  }

  goBack(): void {
    this.router.navigate(['/user/principal/internal-resources']);
  }

  submitRequest(): void {
    if (!this.resource?.id) {
      alert('Erro: recurso não carregado.');
      return;
    }
    if (this.requestForm.invalid) {
      this.requestForm.markAllAsTouched();
      alert('Preencha todos os campos!');
      return;
    }

    const formValue = this.requestForm.value;

    const payload: ResourceRequest = {
      startDate: formValue.startDate,
      endDate: formValue.endDate,
      startTime: formValue.startTime,
      endTime: formValue.endTime,
      justification: formValue.justification,
      resource: { id: this.resource.id },
      user: { id: this.loggedUserId }
    };

    this.requestService.save(this.resource.id, payload).subscribe({
      next: () => {
        alert('Solicitação enviada com sucesso!');
        this.requestForm.reset();
      },
      error: err => {
        console.error('Erro ao enviar', err);
        alert('Erro ao enviar solicitação.');
      }
    });
  }

  reportIncident(): void {
    if (!this.resource) {
      alert('Recurso não carregado.');
      return;
    }

    const dialogRef = this.dialog.open(IncidentComponent, {
      width: '70vw',
      maxWidth: '90vw',
      data: {
        resource: this.resource,
        flag: 'report'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Incidente reportado:', result);
      }
    });
  }
}
