import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { AuthData } from './auth-data';

@Injectable({ providedIn: 'root' })
export class AuthService {
 constructor(private http: HttpClient) {}


  createUser(email: string, password: string) {
   const authData: AuthData = { email, password };
   this.http.post('http://localhost:3000/signup', authData)
     .subscribe(response => {
       console.log(response);
    });
 }
}
