import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthModalComponent } from '../auth-modal/auth-modal.component';
import { RegModalComponent } from '../reg-modal/reg-modal.component';

@Component({
  selector: 'app-modal-full',
  standalone: true,
  imports: [AuthModalComponent, RegModalComponent],
  templateUrl: './modal-full.component.html',
  styleUrl: './modal-full.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalFullComponent {
  closeModal(event: Event){
    const modalWindow = document.querySelector('.modal-window');
    if (event.target === modalWindow && modalWindow) {
      modalWindow.classList.toggle('hidden');
    }
  }
}
