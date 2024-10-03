import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ToggleHiddenService } from '../../service/toggle-hidden.service';

@Component({
  selector: 'app-reg-modal',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './reg-modal.component.html',
  styleUrl: './reg-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegModalComponent {

  constructor(private toggleHiddenService:ToggleHiddenService){}
  
  // toggleHiddenService.trigger('.modal-window')

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
