import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-full',
  standalone: true,
  imports: [],
  templateUrl: './modal-full.component.html',
  styleUrl: './modal-full.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalFullComponent {
  @Input() top: string = '0';

  // closeModal(event: Event){
  //   const modalWindow = document.querySelector('.modal-window');
  //   const authModal = document.querySelector('app-auth-modal');
  //   const regModal = document.querySelector('app-reg-modal');
  //   if (event.target === modalWindow && modalWindow) {
  //     modalWindow.classList.toggle('hidden');
  //     if (authModal && !authModal.classList.contains('hidden')) {
  //       authModal.classList.toggle('hidden');
  //     } 
  //     if (regModal && !regModal.classList.contains('hidden')) {
  //       regModal.classList.toggle('hidden');
  //     } 
  //   }
  // }

  closeModal(event: Event) {
    const modalWindow = document.querySelector('.modal-window');
    if (event.target === modalWindow) {
      const modals = document.querySelectorAll('.modal-window, app-auth-modal, app-reg-modal');
      modals.forEach(modal => modal.classList.add('hidden'));
    }
  }
    
}
