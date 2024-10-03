import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleHiddenService {

  constructor() { }
  
  public trigger(selector: string): void {
    const modalWindow = document.querySelector(selector);
    if (modalWindow) {
      modalWindow.classList.toggle('hidden');
    }
  }
}
