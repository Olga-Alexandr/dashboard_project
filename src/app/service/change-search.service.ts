import { Injectable } from '@angular/core';
import { CurrentCategoryService } from './current-category.service';
import { CurrentSearchService } from './current-search.service';

@Injectable({
  providedIn: 'root'
})
export class ChangeSearchService {

  constructor(private currentSearchService: CurrentSearchService, private currentCategoryService: CurrentCategoryService) { }

  set(str: string) {
    this.currentSearchService.set(str.toLowerCase());
    this.currentCategoryService.reset();
  }
}
