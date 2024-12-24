import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, CanDeactivateFn, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

// export const deactivateGuardGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
//   return true;
// };


export interface CanDeactivateComponent{
    canDeactivate : () => Observable<boolean> | Promise<boolean> | boolean;
}


@Injectable({
  providedIn:'root'
})

export class DeactivateGuardGuard implements CanDeactivate<CanDeactivateComponent>{

  canDeactivate(component: CanDeactivateComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    return component.canDeactivate ? component.canDeactivate() : true;
    
  }

}