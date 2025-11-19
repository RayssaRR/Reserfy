import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-usage-entry',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSlideToggleModule 
  ],
  templateUrl: './usage-entry.component.html',
  styleUrls: ['./usage-entry.component.scss']
})
export class UsageEntryComponent implements OnInit {

  usageForm!: FormGroup;
  availableItems = [
    {id: 1, name: 'Luvas Cirúrgicas'}, 
    {id: 2, name: 'Seringa 5ml'},
    {id: 3, name: 'Gaze Estéril'}
  ];
  
  isManualEntry = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.usageForm = this.fb.group({
      itemId: ['', Validators.required],
      quantityUsed: [1, [Validators.required, Validators.min(1)]],
      entryType: ['Manual', Validators.required], 
      reason: ['']
    });

    this.usageForm.get('entryType')?.valueChanges.subscribe(value => {
        this.isManualEntry = value === 'Manual';
    });
  }

  onSubmit(): void {
    if (this.usageForm.valid) {
      console.log('Lançamento de Uso:', this.usageForm.value);
      alert(`Uso de ${this.usageForm.value.quantityUsed} unidades lançado como ${this.usageForm.value.entryType}.`);
      
      
      this.usageForm.reset({ entryType: this.isManualEntry ? 'Manual' : 'Automático' });
    } else {
      this.usageForm.markAllAsTouched();
      alert('Por favor, preencha o item e a quantidade utilizada.');
    }
  }

  toggleEntryType(event: any) {
    this.isManualEntry = event.checked;
    this.usageForm.get('entryType')?.setValue(this.isManualEntry ? 'Manual' : 'Automático');
  }
}
