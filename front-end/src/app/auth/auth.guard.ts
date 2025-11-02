import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (token) {
    // Se tiver token, deixa acessar a rota
    return true;
  } else {
    // Se não tiver, redireciona para login
    window.alert('Você precisa estar logado para acessar esta página.');
    router.navigate(['/login']);
    return false;
  }
};
