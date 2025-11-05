import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ClinicalDataService, FrontendSymptomData } from '../../services/clinical-data.service';

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

  constructor(
    private fb: FormBuilder,
    private clinicalDataService: ClinicalDataService
  ) { }

  ngOnInit(): void {
    this.symptomHistoryForm = this.fb.group({
      patientId: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
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
      const dataToSend: FrontendSymptomData = this.symptomHistoryForm.value;

      this.clinicalDataService.saveSymptomHistory(dataToSend).subscribe({
        next: (response) => {
          console.log('Resposta da API:', response);
          alert('Histórico de sintomas salvo com sucesso!');
          
          this.symptomHistoryForm.reset();
          this.symptoms.clear();
          this.addSymptom();
        },
        error: (err) => {
          console.error('Erro ao salvar histórico (API):', err);
          alert('Erro ao salvar histórico. Verifique o console para detalhes.');
        }
      });
    } else {
      this.symptomHistoryForm.markAllAsTouched();
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }
}
