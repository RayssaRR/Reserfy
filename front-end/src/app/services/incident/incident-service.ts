import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Incident } from '../../models/incident/incident.model';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  http = inject(HttpClient);

  APIUser = `http://localhost:8080/user/principal/internal-resources`;

  APIAdmin = `http://localhost:8080/admin/principal/internal-resources`;


  list(): Observable<Incident[]> {
    return this.http.get<Incident[]>(`${this.APIAdmin}/list`);
  }

  findById(id: number): Observable<IncidentService> {
    return this.http.get<IncidentService>(`${this.APIAdmin}/${id}`);
  }

  save(resourceId: number, incident: Incident): Observable<string> {
  return this.http.post(`${this.APIUser}/${resourceId}/incidents/save`, incident, { responseType: 'text' });
  }


  delete(id: number): Observable<IncidentService> {
    return this.http.delete<IncidentService>(`${this.APIAdmin}/delete/${id}`);
  }

  update(id: number, incident: IncidentService): Observable<any> {
  return this.http.put<IncidentService>(`${this.APIAdmin}/update/${id}`, incident);
}
}
