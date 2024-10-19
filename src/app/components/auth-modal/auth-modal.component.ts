import { booleanAttribute, ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { AuthService } from '../../service/auth.service';
import { tap } from 'rxjs/operators';
import { ToggleHiddenService } from '../../service/toggle-hidden.service';
import { Subject } from 'rxjs/internal/Subject';
import { PhoneMaskDirective } from '../../directives/phone-mask.directive';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, NgClass, PhoneMaskDirective],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthModalComponent implements OnInit, OnDestroy {
  authReactiveForm!: FormGroup;
  private destroy$ = new Subject<void>();

  constructor(private fb: FormBuilder, private authService: AuthService, public toggleHiddenService:ToggleHiddenService){}

  ngOnInit(){
    this.initForm();
  }

  initForm(){
    this.authReactiveForm = this.fb.group({
     login: ['', [
      Validators.required,
      Validators.pattern(/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/)      
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
    //send data from form, get token and remember User 
    this.authService.login(this.authReactiveForm.value)
      .pipe(
        tap(token => {
          localStorage.setItem('token', token as string);
          this.authService._setUserAuth(token as string);
        })
      ).subscribe();

    this.closeForm(['.modal-window', 'app-auth-modal']);

    this.authReactiveForm.reset();

    // console.log(this.authReactiveForm.getRawValue());
  }

  closeForm(selectors:string[]): void {
    selectors.forEach(selector => this.toggleHiddenService.toggleHidden(selector));    
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
