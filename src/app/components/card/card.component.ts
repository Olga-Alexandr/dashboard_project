import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Advert } from '../../interfaces/advert';
import { ChangeSearchService } from '../../service/change-search.service';
import { FormatDatePipe } from '../../pipes/format-date.pipe';
import { GetUrlImgPipe } from "../../pipes/get-url-img.pipe";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink, FormatDatePipe, GetUrlImgPipe],
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

  constructor(private changeSearchService: ChangeSearchService){}

  clickCard(id:any):void{
    alert('click'+ id);
    // open card-page by id
  }

  clickName(event: Event, name: string): void {
    event.stopPropagation(); // Stop click on this element
    this.changeSearchService.set(name);
  }
}
