import { ChangeDetectionStrategy, Component } from '@angular/core';
import { products$ } from '../../../mocks/products';
import { CardComponent } from '../card/card.component';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-cards-container',
  standalone: true,
  imports: [CardComponent, AsyncPipe, NgFor],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsContainerComponent {
  products$ = products$;
}
