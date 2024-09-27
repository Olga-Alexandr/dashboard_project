import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { HeaderSearchComponent } from './header-search/header-search.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-content',
  standalone: true,
  imports: [ButtonComponent, HeaderSearchComponent, RouterLink],
  templateUrl: './header-content.component.html',
  styleUrl: './header-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderContentComponent {

}
