import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResourceRequest } from '../../models/request/request.model';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  http = inject(HttpClient);

  API = 'http://localhost:8080/admin/principal/requests';

  APIUser = 'http://localhost:8080/user/principal/internal-resources';


  list(): Observable<ResourceRequest[]> {
    return this.http.get<ResourceRequest[]>(`${this.APIUser}/requests`);
  }

  save(idResource:number, request: ResourceRequest): Observable<string> {
    return this.http.post(`${this.APIUser}/${idResource}/requests/save`, request, { responseType: 'text' });
  }

  delete(id: number): Observable<ResourceRequest> {
    return this.http.delete<ResourceRequest>(`${this.API}/delete/${id}`);
  }

  update(id: number, request: ResourceRequest): Observable<any> {
    return this.http.put<ResourceRequest>(`${this.API}/update/${id}`, request);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`${this.APIUser}/${id}`);
  }

  
}
