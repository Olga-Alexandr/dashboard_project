import { ChangeDetectionStrategy, Component } from '@angular/core';
import { products$ } from '../../../mocks/products';
import { CardComponent } from "../card/card.component";
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CardComponent, AsyncPipe, NgFor],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {
  products$ = products$;
}
