import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { CurrentSearchService } from '../../service/current-search.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() product: { id: number; imgs: string[]; name: string; price: number; address: string; dateCreate: string } = {
    id: 0,
    imgs: ["../../../../public/img/x_blue.svg"],
    name: '',
    price: 0,
    address: '',
    dateCreate: ''
  };

  constructor(private currentSearchService: CurrentSearchService, private cdr: ChangeDetectorRef){
    this.cdr.markForCheck();
  }

  clickCard(id:any):void{
    alert('click'+ id);
    // open card-page by id
  }

  clickName(event: Event, name: string): void {
    event.stopPropagation(); // Stop click
    console.log('Clicked name:', name);
    this.currentSearchService.set(name);
  }
}
