import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-modal-full',
  standalone: true,
  imports: [],
  templateUrl: './modal-full.component.html',
  styleUrl: './modal-full.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalFullComponent {
  closeModal(event: Event){
    const modalWindow = document.querySelector('.modal-window');
    const authModal = document.querySelector('app-auth-modal');
    const regModal = document.querySelector('app-reg-modal');
    if (event.target === modalWindow && modalWindow) {
      modalWindow.classList.toggle('hidden');
      if (authModal && !authModal.classList.contains('hidden')) {
        authModal.classList.toggle('hidden');
      } 
      if (regModal && !regModal.classList.contains('hidden')) {
        regModal.classList.toggle('hidden');
      } 
    }
  }
}
