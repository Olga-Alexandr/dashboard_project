import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CurrentCategoryService {
  private currentCategorySubject = new BehaviorSubject<string | null>(null);
  currentCategory$ = this.currentCategorySubject.asObservable();

  constructor() { }

  set(str: string) {
    this.currentCategorySubject.next(str);
  }

  get() {
    return this.currentCategorySubject.getValue();
  }

  reset() {
    this.currentCategorySubject.next(null);
  }
}
