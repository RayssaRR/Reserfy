import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataManagementComponent } from '../../components/data-management/data-management.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule, 
    DataManagementComponent
  ],
  template: `
    <div class="page-container">
      <h1>Catálogo de Produtos</h1>
      <p class="subtitle">Utilize a barra de busca para encontrar produtos via busca inteligente.</p>
      
      <app-data-management></app-data-management>
    </div>
  `,
  styles: [`
    .page-container {
      padding: 30px;
      max-width: 1200px; /* Limita a largura para melhor visualização da tabela */
      margin: 0 auto; /* Centraliza na tela */
    }
    h1 {
      font-size: 1.8em;
      color: #333;
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
export class ProductsComponent {
}
