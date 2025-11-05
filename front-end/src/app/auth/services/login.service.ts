// src/app/auth/login.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { Login } from '../models/login';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private http = inject(HttpClient);
  private API = 'http://localhost:8080/api/auth/login';

  logar(login: Login): Observable<string> {
    return this.http.post(this.API, login, {
      headers: { 'Content-Type': 'application/json' },
      responseType: 'text',
    });
  }

  addToken(token: string) {
    localStorage.setItem('token', token);
  }

  removerToken() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  jwtDecode() {
    const token = this.getToken();
    return token ? jwtDecode<JwtPayload>(token) : '';
  }

  hasRole(roleFlag: string) {
    const user = this.jwtDecode() as User;
    return user?.roleFlag === roleFlag;
  }

  getUsuarioLogado() {
    return this.jwtDecode() as User;
  }
}
