import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Manutencao } from '../../models/maintenance-details/maintenance-details.model'; 

@Injectable({
  providedIn: 'root'
})
export class MaintenanceDetailsService {

  private api = 'http://seu-backend/manutencoes'; 

  constructor(private http: HttpClient) {}

  getDetalhes(id: number): Observable<Manutencao> {
    return this.http.get<Manutencao>(`${this.api}/${id}`);
  }

  marcarResolvido(id: number) {
    return this.http.put(`${this.api}/${id}/resolver`, {});
  }

  enviarParaRevisao(id: number) {
    return this.http.put(`${this.api}/${id}/revisao`, {});
  }

  excluir(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
