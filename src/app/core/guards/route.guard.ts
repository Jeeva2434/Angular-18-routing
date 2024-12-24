import { ActivatedRouteSnapshot, CanActivateFn, Route, Router, RouterStateSnapshot } from '@angular/router';
import { UserLogginDetails } from '../model/user.model';
import { inject } from '@angular/core';

export const routeGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {

  const router:Router = inject(Router);

  let userData : UserLogginDetails | null = null;

  const storageData = sessionStorage.getItem('loginUserDetail')

  if(storageData){
    userData = JSON.parse(storageData) as UserLogginDetails;
  }
  
  if(userData && route?.data?.['role'].includes(userData.userRole)){
    return true;
  }else{
    router.navigateByUrl('/');
    return false;
  }

};
