import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { InventoryViewComponent } from '../../components/inventory-view/inventory-view.component';
import { UsageEntryComponent } from '../../components/usage-entry/usage-entry.component';

@Component({
  selector: 'app-inventory-page',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    InventoryViewComponent,
    UsageEntryComponent
  ],
  template: `
    <div class="inventory-page-container">
      <h1>Gerenciamento de Inventário e Estoque</h1>
      <p class="subtitle">Acompanhe o estoque atual e utilize a interface para registrar o consumo de itens.</p>
      
      <div class="inventory-content">
        
        <app-usage-entry></app-usage-entry>

        <app-inventory-view></app-inventory-view>
      </div>
    </div>
  `,
  styles: [`
    .inventory-page-container {
      padding: 30px;
      max-width: 1400px;
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
    .inventory-content {
        display: grid;
        gap: 30px;
        margin-top: 20px;
    }
    /* Centraliza o formulário de uso, que tem largura máxima de 500px */
    app-usage-entry {
        display: block;
        margin: 0 auto;
    }
  `]
})
export class InventoryPageComponent {}
