import { booleanAttribute, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, NgClass],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthModalComponent implements OnInit {
  authReactiveForm!: FormGroup;
 
  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.initForm();
  }

  initForm(){
    this.authReactiveForm = this.fb.group({
     tel: ['', [
      Validators.required,
      Validators.pattern(/^(\+7|8)[\- ]?\d{3}[\- ]?[\d\- ]{7,10}$/)
     ]
    ],
     pwd: ['', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9]+$$/)
     ]
    ],
    rem: [booleanAttribute]
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.authReactiveForm.controls[controlName];    
    const result = control.invalid && control.touched;    
    return result;
  }

  onSubmit() {
    const controls = this.authReactiveForm.controls;    
    if (this.authReactiveForm.invalid) {
      // mark each cotrols as touched
      Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
      //exit of method 
      return;
    }    
    //TODO:send data from form, chek isUser and get token
    console.log(this.authReactiveForm.value);

    this.closeForm(['.modal-window', 'app-reg-modal']);
  }
  
  closeForm(selectors:string[]): void {
    selectors.forEach(selector => this.close(selector));
  }

  close(selector:string): void {
    const elem = document.querySelector(selector);
    if (elem) {
      elem.classList.toggle('hidden');
    }
  }
}
