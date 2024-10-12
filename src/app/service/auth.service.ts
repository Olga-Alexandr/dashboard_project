import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataUser } from '../interfaces/data-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://dzitskiy.ru:5000';
  private _http = inject(HttpClient);
  public _headers = new HttpHeaders();

  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor() {}

  public login(userLogin: {
    "login": "string",
    "password": "stringst"
    }
  ){
    return this._http.post(`${this.apiUrl}/Auth/Login`, userLogin);
  }

  _setUserAuth(token: string){
    this._headers = this._headers.set('Authorization', `Bearer ${token}`);
    this.userSubject.next(this._http.get(`${this.apiUrl}/Users/current`, {headers: this._headers}));
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.userSubject.next(null);
  }

}
