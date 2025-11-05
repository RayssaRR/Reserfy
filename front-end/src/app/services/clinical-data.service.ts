import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SymptomRecord {
  patientId: number | string;
  description: string;
  status: string[]; 
  notes: string;
  timestamp: string;
}

export interface FrontendSymptomData {
    patientId: number | string;
    symptoms: {
        description: string;
        status: string[];
        notes: string;
    }[];
}

@Injectable({
  providedIn: 'root'
})
export class ClinicalDataService {

  private apiUrl = '/api/clinical/records'; 

  constructor(private http: HttpClient) { }


  saveSymptomHistory(formData: FrontendSymptomData): Observable<any> {
    
    const patientId = formData.patientId;

    const recordsToSave: SymptomRecord[] = formData.symptoms.map(symptom => ({
      patientId: patientId,
      description: symptom.description,
      status: symptom.status,
      notes: symptom.notes,
      timestamp: new Date().toISOString()
    }));
    
    console.log('Registros enviados para o Back-end:', recordsToSave);

    return this.http.post(this.apiUrl, recordsToSave);
  }
}
