import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, startWith, map } from 'rxjs';
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

const PRODUCTS_DATA: Product[] = [
  {id: 101, name: 'Smart TV 4K', category: 'Eletrônicos', price: 2500},
  {id: 102, name: 'Notebook Ultrafino', category: 'Informática', price: 4200},
  {id: 103, name: 'Headset Gamer', category: 'Acessórios', price: 350},
  {id: 104, name: 'Mouse Sem Fio', category: 'Acessórios', price: 80},
  {id: 105, name: 'Monitor LED 27"', category: 'Informática', price: 1200},
  {id: 106, name: 'Máquina de Café', category: 'Eletrodomésticos', price: 450},
  {id: 107, name: 'Smartwatch Esportivo', category: 'Eletrônicos', price: 600},
  {id: 108, name: 'Cadeira Ergonômica', category: 'Móveis', price: 900},
];

@Component({
  selector: 'app-data-management',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  templateUrl: './data-management.component.html',
  styleUrls: ['./data-management.component.scss']
})
export class DataManagementComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'category', 'price'];
  dataSource = new MatTableDataSource(PRODUCTS_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  searchControl = new FormControl('');
  filteredOptions!: Observable<string[]>;
  allNames: string[] = PRODUCTS_DATA.map(e => e.name);

  ngOnInit() {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    
    this.searchControl.valueChanges.subscribe(value => {
      this.dataSource.filter = value!.trim().toLowerCase();
      
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allNames.filter(option => option.toLowerCase().includes(filterValue));
  }
}
