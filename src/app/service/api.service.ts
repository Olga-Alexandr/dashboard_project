import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdvertCreate } from '../interfaces/advert-create';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private _httpClient: HttpClient) { }

  public getCategories(): Observable<any>{
    return this._httpClient.get('http://dzitskiy.ru:5000/Categories');
  }

  public createAdvert(model: AdvertCreate): Observable<any>{
    return this._httpClient.post('http://dzitskiy.ru:5000/Advert', model);
  }
}
