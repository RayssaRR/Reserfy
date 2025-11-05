import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private http = inject(HttpClient);
  private API = 'http://localhost:8080/api/auth/register';

  register(user: User): Observable<string> {
    return this.http.post<string>(this.API, user, { responseType: 'text' as 'json' });
  }
}
