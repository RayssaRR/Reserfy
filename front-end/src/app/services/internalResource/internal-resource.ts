import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InternalResource } from '../../models/internalResource/internalResource.model';


@Injectable({
  providedIn: 'root'
})
export class InternalResourceService {

  http = inject(HttpClient);


  API = 'http://localhost:8080/admin/principal/internal-resources';

  list(): Observable<InternalResource[]> {
    return this.http.get<InternalResource[]>(`${this.API}/list`);
  }

  save(internalResource: InternalResource): Observable<string> {
    return this.http.post(`${this.API}/save`, internalResource, { responseType: 'text' });
  }

  delete(id: number): Observable<InternalResource> {
    return this.http.delete<InternalResource>(`${this.API}/delete/${id}`);
  }

  update(id: number, internalResource: InternalResource): Observable<any> {
  return this.http.put<InternalResource>(`${this.API}/update/${id}`, internalResource);
}

}
