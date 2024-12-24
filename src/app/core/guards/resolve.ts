import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ApiService } from "../services/api.service";
import { take } from "rxjs";



@Injectable({
    providedIn:'root'
})

export class UserResolver implements Resolve<any>{

    private apiService : ApiService = inject(ApiService);

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.apiService.getUser$.pipe();
    }
}