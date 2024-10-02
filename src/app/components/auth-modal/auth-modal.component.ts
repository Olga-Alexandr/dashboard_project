import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthModalComponent {
  close(): void {

  }
}
