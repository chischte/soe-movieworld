import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { IAuthData } from '../model/IAuthData';

@Injectable({ providedIn: 'root' })
export class AuthService {
  serverPath: string;
  apiPath: string;
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {
    this.serverPath = 'http://localhost:3000/';
    this.apiPath = 'api/user/';
  }

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  createUser(email: string, password: string) {
    const authData: IAuthData = {email, password};
    this.http.post(this.serverPath + this.apiPath + 'signup', authData)
      .subscribe(response => {
        console.log(response);
      });
  }

  login(email: string, password: string) {
    const authData: IAuthData = {email, password};
    this.http.post<{ token: string }>(this.serverPath + this.apiPath + 'login', authData)
      .subscribe(response => {
        this.token = response.token;
        this.authStatusListener.next(true);
        console.log('test ob das Token ankommt im frontend' + this.token);
      });
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/']);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token,
      expirationDate: new Date(expirationDate)
    };
  }
}

