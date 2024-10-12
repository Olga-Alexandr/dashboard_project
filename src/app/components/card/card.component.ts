import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { CurrentSearchService } from '../../service/current-search.service';
import { RouterLink } from '@angular/router';
import { Product } from '../../interfaces/product';
import { Advert } from '../../interfaces/advert';
import { CurrentCategoryService } from '../../service/current-category.service';
import { ChangeSearchService } from '../../service/change-search.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() product: Advert = {
    id: '',
    name: '',
    location: '',
    createdAt: '',
    isActive: true,
    imagesIds: ["../../../../public/img/x_blue.svg"],
    cost: 0
  };

  constructor(private currentSearchService: CurrentSearchService, private cdr: ChangeDetectorRef, private changeSearchService: ChangeSearchService){
    this.cdr.markForCheck();
  }

  clickCard(id:any):void{
    alert('click'+ id);
    // open card-page by id
  }

  clickName(event: Event, name: string): void {
    event.stopPropagation(); // Stop click on this element
    this.changeSearchService.set(name);
  }
}
