import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  const requiredRoles = route.data?.['roleFlag'] as string[];

  if (!authService.isAuthenticated()) {
    router.navigate(['/auth/login']);
    return false;
  }

  const user = authService.getUser();

  if (requiredRoles && requiredRoles.length > 0) {
    if (user && requiredRoles.includes(user.roleFlag)) {
      return true;
    } else {
      router.navigate(['/auth/login']); 
      return false;
    }
  }

  return true;
};
