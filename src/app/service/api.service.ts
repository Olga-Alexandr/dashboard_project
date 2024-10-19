import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private _httpClient: HttpClient) { }

  public getCategories(): Observable<any>{
    return this._httpClient.get('http://dzitskiy.ru:5000/Categories');
  }

  public createAdvert(model: FormData): Observable<any>{
    return this._httpClient.post('http://dzitskiy.ru:5000/Advert', model);
  }
  
  public getAdvertId(id: string): Observable<any>{
    return this._httpClient.get(`http://dzitskiy.ru:5000/Advert/{${id}}`);
  }

  public regUser(user:{
    "name": "string",
    "login": "string",
    "password": "string"
  }): Observable<any>{
    return this._httpClient.post('http://dzitskiy.ru:5000/Auth/Register', user);
  }
}
