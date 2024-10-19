import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from "../button/button.component";
import { AsyncPipe, NgClass } from '@angular/common';
import { ApiService } from '../../service/api.service';
import { PhoneMaskDirective } from '../../directives/phone-mask.directive';
import { Subject } from 'rxjs/internal/Subject';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-new-advert',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, NgClass, PhoneMaskDirective, AsyncPipe],
  templateUrl: './new-advert.component.html',
  styleUrl: './new-advert.component.scss'
})
export class NewAdvertComponent implements OnDestroy  {
  private _fb = inject(FormBuilder);
  private _api = inject(ApiService);
  private destroy$ = new Subject<void>();

  public categories$ = this._api.getCategories();

  public form: FormGroup = this._fb.group ({
    name: ['', [
      Validators.required,
      Validators.pattern(/^[а-яА-ЯёЁa-zA-Z0-9]+$/)
    ]],
    description: [''],
    imagesIds: [[]],
    cost: [0, [
      Validators.required,
    ]],
    email: [''],
    phone: ['', [
      Validators.required,
    ]],
    location: ['', [
      Validators.required,
    ]],
    categoryId: ['', [
      Validators.required,
    ]],
  });

  isControlInvalid(controlName: string): boolean {
    const control = this.form.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }
  
  onSubmit() {
    const controls = this.form.controls;
    if (this.form.invalid) {
      // mark each cotrols as touched
      Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
      //exit of method
      return;
    }
    // send data from form
    const formData = new FormData();
    Object.keys(this.form.value).forEach(key => {
      formData.append(key, this.form.value[key]);
    });
    this._api.createAdvert(formData)
      .pipe(
        tap(response => {
          console.log(response);
        })
      ).subscribe();

    // console.log(this.form.value);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
