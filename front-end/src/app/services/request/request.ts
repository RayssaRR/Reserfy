import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from '../../models/request/request.model';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  http = inject(HttpClient);

  API = 'http://localhost:8080/admin/principal/requests';

  list(): Observable<Request[]> {
    return this.http.get<Request[]>(`${this.API}/list`);
  }

  save(request: Request): Observable<string> {
    return this.http.post(`${this.API}/save`, request, { responseType: 'text' });
  }

  delete(id: number): Observable<Request> {
    return this.http.delete<Request>(`${this.API}/delete/${id}`);
  }

  update(id: number, request: Request): Observable<any> {
    return this.http.put<Request>(`${this.API}/update/${id}`, request);
  }
}
