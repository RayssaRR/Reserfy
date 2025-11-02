// src/app/auth/http-interceptor.ts
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const meuhttpInterceptor: HttpInterceptorFn = (request, next) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (token && 
      !request.url.includes('/login') && 
      !request.url.includes('/register')) {
    request = request.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
  }

  return next(request).pipe(
    catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401 || err.status === 403) {
          window.alert('Acesso não autorizado, faça login novamente.');
          router.navigate(['/login']);
        } else {
          console.error('HTTP error:', err);
        }
      } else {
        console.error('An unexpected error occurred:', err);
      }

      return throwError(() => err);
    })
  );
};
