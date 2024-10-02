import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardsContainerComponent } from '../cards-container/cards-container.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CardsContainerComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {

}
