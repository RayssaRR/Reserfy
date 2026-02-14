import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-incident',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.scss']
})
export class IncidentComponent {
  form: FormGroup;
  gravities = ['Baixa', 'Média', 'Alta'];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<IncidentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      name: [{ value: data.resource?.name || '', disabled: data.flag === 'delete' }, Validators.required],
      category: [{ value: data.resource?.category || '', disabled: data.flag === 'delete' }, Validators.required],
      location: [{ value: data.resource?.location || '', disabled: data.flag === 'delete' }, Validators.required],
      status: [{ value: data.resource?.status || '', disabled: data.flag === 'delete' }, Validators.required],
      description: [{ value: data.resource?.description || '', disabled: data.flag === 'delete' }, Validators.required],
      date: ['', Validators.required],
      severity: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      alert('Preencha todos os campos!');
      return;
    }
    this.dialogRef.close(this.form.value); 
  }

  cancel() {
    this.dialogRef.close();
  }
}
