import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { Login } from '../models/login';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router); 
  private readonly API_LOGIN = 'http://localhost:8080/api/auth/login';
  private readonly TOKEN_KEY = 'token';


  login(login: Login): Observable<string> {
    return this.http.post(this.API_LOGIN, login, {
      headers: { 'Content-Type': 'application/json' },
      responseType: 'text',
    });
  }

  saveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  decodeToken(): JwtPayload | null {
    const token = this.getToken();
    return token ? jwtDecode<JwtPayload>(token) : null;
  }

  getUser(): User | null {
    const decoded = this.decodeToken();
    return decoded ? (decoded as unknown as User) : null;
  }

  getRoleFlag(user: User): string {
    const roleFlag = user?.roleFlag;
    return roleFlag;
  }

  logout(): void {
    this.removeToken(); 
    localStorage.removeItem('user'); 
    this.router.navigate(['/auth/login']); 
  }
}
