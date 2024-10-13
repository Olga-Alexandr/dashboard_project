import { Advert } from './../interfaces/advert';
import { CurrentCategoryService } from './current-category.service';
import { inject, Injectable } from '@angular/core';
import { products$ } from '../../mocks/products';
import { CurrentSearchService } from './current-search.service';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FilterProductsService {
  private _http = inject(HttpClient);

    constructor(private currentSearchService: CurrentSearchService, private currentCategoryService: CurrentCategoryService) { }

  get(): Observable<Advert[]> {
    return this._http.post<Advert[]>('http://dzitskiy.ru:5000/Advert/search', {
      "search": this.currentSearchService.get(),
      "showNonActive": true,
      "category": this.currentCategoryService.get()
    });
  }

}
