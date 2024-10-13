import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleHiddenService {

  constructor() { }
  
  toggleHidden(selector:string): void {
    const elem = document.querySelector(selector);
    if (elem) {
      elem.classList.toggle('hidden');
    }
  }
  
}
