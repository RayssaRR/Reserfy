import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, startWith, map, merge, switchMap, tap } from 'rxjs';

import { DataService, Product, DataResponse, SearchParams } from '../services/data.service';

@Component({
  selector: 'app-data-management',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, MatTableModule, MatPaginatorModule,
    MatSortModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule
  ],
  templateUrl: './data-management.component.html',
  styleUrls: ['./data-management.component.scss']
})
export class DataManagementComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'category', 'price'];
  dataSource = new MatTableDataSource<Product>([]);
  resultsLength = 0; 

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  searchControl = new FormControl('');
  filteredOptions!: Observable<string[]>;
  allNames: string[] = []; 

  constructor(private dataService: DataService) { } 

  ngOnInit() {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page, this.searchControl.valueChanges.pipe(map(() => {})))
      .pipe(
        tap(() => this.paginator.pageIndex = 0),
        startWith({}),
        switchMap(() => {
          return this.loadData();
        })
      )
      .subscribe();
    
    this.loadNamesForAutocomplete();
  }

  loadData(): Observable<DataResponse> {
    const params: SearchParams = {
      searchTerm: this.searchControl.value || undefined,
      pageIndex: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
      sortActive: this.sort.active,
      sortDirection: this.sort.direction as 'asc' | 'desc',
    };

    return this.dataService.getProducts(params).pipe(
      tap((dataResponse: DataResponse) => {
        this.resultsLength = dataResponse.totalCount;
        this.dataSource.data = dataResponse.data;
      })
    );
  }

  loadNamesForAutocomplete() {
    this.allNames = this.dataService.PRODUCTS_DATA.map(p => p.name);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allNames.filter(option => option.toLowerCase().includes(filterValue));
  }
}
