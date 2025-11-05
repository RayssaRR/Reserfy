import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardChartsComponent } from '../../components/dashboard-charts/dashboard-charts.component';

@Component({
  selector: 'app-insights',
  standalone: true,
  imports: [
    CommonModule, 
    DashboardChartsComponent
  ],
  template: `
    <div class="page-container">
      <h1>Análise de Insights do Sistema</h1>
      <p class="subtitle">Visão geral das principais métricas de negócio.</p>
      
      <app-dashboard-charts></app-dashboard-charts>
    </div>
  `,
  styles: [`
    .page-container {
      padding: 30px;
      max-width: 1400px;
      margin: 0 auto;
    }
    h1 {
      font-size: 2em;
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
export class InsightsComponent {}
