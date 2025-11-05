import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicSymptomFormComponent } from '../../components/dynamic-symptom-form/dynamic-symptom-form.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
    CommonModule, 
    DynamicSymptomFormComponent
  ],
  template: `
    <div class="page-container">
      <h1>Registro de Histórico Clínico</h1>
      <p class="subtitle">Utilize o formulário dinâmico para registrar múltiplos sintomas com status específicos.</p>
      
      <app-dynamic-symptom-form></app-dynamic-symptom-form>
    </div>
  `,
  styles: [`
    .page-container {
      padding: 30px;
      max-width: 900px;
      margin: 0 auto;
    }
    h1 {
      font-size: 1.8em;
      color: #3f51b5;
      margin-bottom: 5px;
    }
    .subtitle {
      color: #666;
      margin-bottom: 20px;
      border-bottom: 1px solid #eee;
      padding-bottom: 15px;
    }
  `]
})
export class HistoryComponent {}
