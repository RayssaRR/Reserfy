import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs'; 

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

export interface DataResponse {
  data: Product[];
  totalCount: number;
}
export interface SearchParams {
  searchTerm?: string;
  pageIndex: number;
  pageSize: number;
  sortActive: string;
  sortDirection: 'asc' | 'desc';
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = '/api/products/search'; 

  constructor(private http: HttpClient) { }

  getProducts(params: SearchParams): Observable<DataResponse> {
    
    let httpParams = new HttpParams()
      .set('term', params.searchTerm || '')
      .set('page', params.pageIndex.toString())
      .set('limit', params.pageSize.toString())
      .set('sort', params.sortActive)
      .set('order', params.sortDirection);
    
    const filteredData = this.simulateElasticsearch(params.searchTerm);
    const startIndex = params.pageIndex * params.pageSize;
    const endIndex = startIndex + params.pageSize;

    const response: DataResponse = {
        data: filteredData.slice(startIndex, endIndex),
        totalCount: filteredData.length
    };
    
    return of(response);
  }

  private PRODUCTS_DATA: Product[] = [
    {id: 101, name: 'Smart TV 4K', category: 'Eletrônicos', price: 2500},
    {id: 102, name: 'Notebook Ultrafino', category: 'Informática', price: 4200},
    // ... adicione mais dados para testar paginação/busca ...
    {id: 109, name: 'Teclado Mecânico', category: 'Acessórios', price: 500},
    {id: 110, name: 'Câmera Mirrorless', category: 'Eletrônicos', price: 3000},
  ];

  private simulateElasticsearch(term?: string): Product[] {
      if (!term) return this.PRODUCTS_DATA;
      const lowerTerm = term.toLowerCase();
      
      return this.PRODUCTS_DATA.filter(p => 
          p.name.toLowerCase().includes(lowerTerm) || 
          p.category.toLowerCase().includes(lowerTerm)
      ).sort((a, b) => a.id - b.id);
  }
}
