import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../auth/user';

@Injectable({
  providedIn: 'root'
})
export class Users {
  getAll() {
      throw new Error('Method not implemented.');
  }
  http = inject(HttpClient);

  API = "http://localhost:8080/api/users";

  constructor(){}

  save(user: User): Observable<string>{
    return this.http.post<string>(this.API+"/save", user, {responseType: 'text' as 'json'});
  }

  update(user: User): Observable<string>{
    return this.http.put<string>(this.API+"/update", user, {responseType: 'text' as 'json'});
  }
  
}
