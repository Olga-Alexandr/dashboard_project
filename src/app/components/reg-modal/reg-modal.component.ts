import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToggleHiddenService } from '../../service/toggle-hidden.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-reg-modal',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, NgClass],
  templateUrl: './reg-modal.component.html',
  styleUrl: './reg-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegModalComponent implements OnInit {
  regReactiveForm!: FormGroup;
 
  constructor(private fb: FormBuilder){}

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
     tel: ['', [
      Validators.required,
      Validators.pattern(/^(\+7|8)[\- ]?\d{3}[\- ]?[\d\- ]{7,10}$/)
     ]
    ],
     pwd: ['', [
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
    console.log(this.regReactiveForm.value);

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
