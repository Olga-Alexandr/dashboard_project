// import { CurrentSearchService } from './current-search.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { CurrentCategoryService } from './current-category.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentSearchService {
  private currentSearchSubject = new BehaviorSubject<string>('');
  currentSearch$ = this.currentSearchSubject.asObservable();

  constructor() {}

  set(str: string) {
    this.currentSearchSubject.next(str.toLowerCase());
  }

  get() {
    return this.currentSearchSubject.getValue();
  }
}
