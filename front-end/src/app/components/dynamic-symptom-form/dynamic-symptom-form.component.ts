import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dynamic-symptom-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './dynamic-symptom-form.component.html',
  styleUrls: ['./dynamic-symptom-form.component.scss']
})
export class DynamicSymptomFormComponent implements OnInit {
  
  symptomHistoryForm!: FormGroup;

  statusOptions: string[] = ['Leve', 'Moderado', 'Intenso', 'Crônico', 'Recorrente'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.symptomHistoryForm = this.fb.group({
      patientId: ['', Validators.required],
      symptoms: this.fb.array([this.createSymptomGroup()])
    });
  }

  get symptoms() {
    return this.symptomHistoryForm.get('symptoms') as FormArray;
  }

  createSymptomGroup(): FormGroup {
    return this.fb.group({
      description: ['', Validators.required], 
      status: ['', Validators.required],
      notes: ['']
    });
  }

  addSymptom(): void {
    this.symptoms.push(this.createSymptomGroup());
  }

  removeSymptom(index: number): void {
    this.symptoms.removeAt(index);
  }

  onSubmit(): void {
    if (this.symptomHistoryForm.valid) {
      console.log('Dados a serem enviados para histórico (com timestamps no Back-end):', this.symptomHistoryForm.value);
      alert('Registro de sintomas enviado com sucesso! (Verifique o console)');

      const dataForHistory = this.symptoms.controls.map(control => ({
        patientId: this.symptomHistoryForm.get('patientId')?.value,
        ...control.value,
        timestamp: new Date().toISOString()
      }));
      console.log('Dados Modelados com Timestamp:', dataForHistory);

      this.symptomHistoryForm.reset();
      this.symptoms.clear();
      this.addSymptom();
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }
}
