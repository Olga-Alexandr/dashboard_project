import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CurrentSearchService {
  private currentSearchSubject = new BehaviorSubject<string>('');
  currentSearch$ = this.currentSearchSubject.asObservable();

  constructor() { }

  set(str: string) {
    this.currentSearchSubject.next(str);
  }

  get() {
    return this.currentSearchSubject.getValue();
  }
}
