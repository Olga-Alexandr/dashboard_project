import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public apiUrl = 'http://dzitskiy.ru:5000';
  private _http = inject(HttpClient);
  public _headers = new HttpHeaders();

  public userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();
  static user$: any;

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
    this._http.get(`${this.apiUrl}/Users/current`, { headers: this._headers }).subscribe((user: any) => {
      this.userSubject.next(user);
    });
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.userSubject.next(null);
  }

}
