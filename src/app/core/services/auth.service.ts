import { Injectable, signal } from '@angular/core';
import { UserLogginDetails } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loggedIn = signal<boolean>(false);
  private userRole!:string;

  authenticateUser(user:UserLogginDetails){
    this.loggedIn.set(true);
    this.userRole = user.userRole;
  }

  getUserLoggedStatus():boolean{
    return this.loggedIn();
  }

  loggout(){
    this.loggedIn.set(false);
  }

  getUserRole():string{
    return this.userRole;
  }

}
