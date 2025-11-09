import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  minLimit: number;
  location: string;
}

const INVENTORY_DATA: InventoryItem[] = [
  {id: 1, name: 'Luvas Cirúrgicas', quantity: 150, minLimit: 50, location: 'Sala 1'},
  {id: 2, name: 'Seringa 5ml', quantity: 45, minLimit: 100, location: 'Sala 3'},
  {id: 3, name: 'Gaze Estéril', quantity: 2500, minLimit: 500, location: 'Depósito'},
  {id: 4, name: 'Máscara N95', quantity: 12, minLimit: 20, location: 'Sala 1'},
];

@Component({
  selector: 'app-inventory-view',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './inventory-view.component.html',
  styleUrls: ['./inventory-view.component.scss']
})
export class InventoryViewComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'quantity', 'status', 'location'];
  dataSource = new MatTableDataSource(INVENTORY_DATA);

  viewMode: 'card' | 'table' = 'card';
  
  inventoryItems = INVENTORY_DATA;

  ngOnInit(): void {
  }

  toggleView() {
    this.viewMode = this.viewMode === 'card' ? 'table' : 'card';
  }

  getInventoryStatus(item: InventoryItem): string {
    if (item.quantity <= item.minLimit) {
      return 'Baixo';
    } else if (item.quantity <= item.minLimit * 2) {
      return 'Atenção';
    } else {
      return 'Normal';
    }
  }
}
