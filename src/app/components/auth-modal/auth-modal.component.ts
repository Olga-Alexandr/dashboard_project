import { booleanAttribute, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { AuthService } from '../../service/auth.service';
import { tap } from 'rxjs/operators';



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
  // private authService!: AuthService;

  constructor(private fb: FormBuilder, private authService: AuthService){}

  ngOnInit(){
    this.initForm();
  }

  initForm(){
    this.authReactiveForm = this.fb.group({
     login: ['', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9]+$$/)

      // Validators.pattern(/^(\+7|8)[\- ]?\d{3}[\- ]?[\d\- ]{7,10}$/)
     ]
    ],
    password: ['', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9]+$$/)
     ]
    ],
    // rem: [booleanAttribute]//isn't in API
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
    this.authService.login(this.authReactiveForm.value)
      .pipe(
        tap(token => {
          localStorage.setItem('token', token as string);
          this.authService._setUserAuth(localStorage.getItem('token') as string);
        })
      ).subscribe();

    this.closeForm(['.modal-window', 'app-reg-modal']);

    console.log(this.authReactiveForm.getRawValue());
  }

  closeForm(selectors:string[]): void {
    selectors.forEach(selector => this.toggleHidden(selector));
  }

  toggleHidden(selector:string): void {
    const elem = document.querySelector(selector);
    if (elem) {
      elem.classList.toggle('hidden');
    }
  }
}
