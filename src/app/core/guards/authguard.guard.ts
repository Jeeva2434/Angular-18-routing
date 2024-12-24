import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = 
  (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) : Observable<boolean | UrlTree> | boolean | UrlTree => {
  
    const router = inject(Router);
    const authService = inject(AuthService);

    if(authService.getUserLoggedStatus()){
      return true;
    }else{
      router.navigateByUrl('/login');
      return false;
    }

  };
