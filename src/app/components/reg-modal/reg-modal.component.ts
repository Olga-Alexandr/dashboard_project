import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToggleHiddenService } from '../../service/toggle-hidden.service';
import { NgClass } from '@angular/common';
import { ApiService } from '../../service/api.service';
import { Subject } from 'rxjs/internal/Subject';
import { tap } from 'rxjs/internal/operators/tap';
import { PhoneMaskDirective } from '../../directives/phone-mask.directive';

@Component({
  selector: 'app-reg-modal',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, NgClass, PhoneMaskDirective],
  templateUrl: './reg-modal.component.html',
  styleUrl: './reg-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegModalComponent implements OnInit, OnDestroy {
  regReactiveForm!: FormGroup;
  private destroy$ = new Subject<void>();


  constructor(private fb: FormBuilder, private toggleHiddenService:ToggleHiddenService, private apiService:ApiService){}

  ngOnInit(){
    this.initForm();
  }

  initForm(){
    this.regReactiveForm = this.fb.group({
     name: ['', [
      Validators.required,
      Validators.pattern(/^[а-яА-ЯёЁa-zA-Z0-9]+$/)
     ]
    ],
     login: ['', [
      Validators.required,
      Validators.pattern(/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/)
     ]
    ],
     password: ['', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9]+$$/)
     ]
    ]
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.regReactiveForm.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  onSubmit() {
    const controls = this.regReactiveForm.controls;
    if (this.regReactiveForm.invalid) {
      // mark each cotrols as touched
      Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
      //exit of method
      return;
    }
    //TODO:send data from form
    this.apiService.regUser({
      "name": this.regReactiveForm.value.name,
      "login": this.regReactiveForm.value.login.replace(/^(\+7|8)[\- ]?|[\- ]/g, ''),
      "password": this.regReactiveForm.value.password
      })
      .pipe(
        tap(response => {
          console.log(response);
        })
      ).subscribe();

    console.log(this.regReactiveForm.value);

    this.closeForm(['.modal-window', 'app-reg-modal']);
  }

  closeForm(selectors:string[]): void {
    selectors.forEach(selector => this.toggleHiddenService.toggleHidden(selector));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
