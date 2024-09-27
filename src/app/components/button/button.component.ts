import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() label: string = 'button';
  @Input() iconLeft: string = '';
  @Input() iconRight: string = '';
  @Input() colorClass: string = 'color-blue';
  @Input() padding: string = '8px 12px';
  @Input() gap: string = '4px';
  @Input() maxWidth: string = '';
  @Input() fontStyle: string = 'var(--font-small-medium)';

}
