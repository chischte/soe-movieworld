import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IAuthData } from '../model/IAuthData';

@Injectable({ providedIn: 'root' })
export class AuthService {
  serverPath:string;
  apiPath:string;

  constructor(private http: HttpClient) {
    this.serverPath = 'http://localhost:3000/';
    this.apiPath = 'api/user/';
  }

  createUser(email: string, password: string) {
   const authData: IAuthData = { email, password };
   this.http.post(this.serverPath + this.apiPath + 'signup', authData)
     .subscribe(response => {
       console.log(response);
    });
 }


  login(email: string, password: string) {
    const authData: IAuthData = { email, password };
    this.http.post(this.serverPath + this.apiPath + 'login', authData)
      .subscribe(response => {
        console.log(response);
        console.log(authData);
      });
  }
}
