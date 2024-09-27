import { Injectable } from '@angular/core';
import { products$ } from '../../mocks/products';
import { CurrentSearchService } from './current-search.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterProductsService {
  // products$ = products$;
  // currentSearch = new CurrentSearchService;
  // filteredProducts$ = products$.pipe(
  //   map(products => products.filter(product => product.name === this.currentSearch.get()))
  // );
  constructor(private currentSearchService: CurrentSearchService) { }
  get() { 
    return products$.pipe(
      map(products => products.filter(product => product.name === this.currentSearchService.get()))
    );
  }
}
