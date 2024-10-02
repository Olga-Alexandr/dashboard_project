import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-reg-modal',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './reg-modal.component.html',
  styleUrl: './reg-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegModalComponent {
  close(): void {
    const modalWindow = document.querySelector('.modal-window');
    if (modalWindow) {
      modalWindow.classList.toggle('hidden');
    }
  }
}
