import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, startWith, tap } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  private http = inject(HttpClient);

  UsersAPI = `https://jsonplaceholder.typicode.com/users`;

  getUser$:Observable<User[]> = this.http.get<User[]>(this.UsersAPI).pipe(
    // startWith([]),
    tap((users)=> console.log(users))
  )

}
