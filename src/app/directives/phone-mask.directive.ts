import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneMask]',
  standalone: true
})
export class PhoneMaskDirective {

  constructor(private tel: ElementRef) {}

  @HostListener('focus', ['$event'])
  onFocus(event: Event): void {
    const input = this.tel.nativeElement as HTMLInputElement;
    if (!input.value) {
    input.value = '+7(';
    }
  }
  
  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const input = this.tel.nativeElement as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

    if (value.startsWith('7')) {
      value = value.substring(1);
    }
    
    let formattedValue = '+7(';
    if (value.length > 0) {
      formattedValue += value.substring(0, 3);
    }
    if (value.length >= 4) {
      formattedValue += ')' + value.substring(3, 6);
    }
    if (value.length >= 7) {
      formattedValue += '-' + value.substring(6, 8);
    }
    if (value.length >= 9) {
      formattedValue += '-' + value.substring(8, 10);
    }

    input.value = formattedValue;

  }
 
  @HostListener('blur', ['$event'])
  onBlur(event: Event): void {
    const input = this.tel.nativeElement as HTMLInputElement;
  }

}
