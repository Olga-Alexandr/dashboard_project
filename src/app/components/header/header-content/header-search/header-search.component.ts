import { ChangeDetectionStrategy, Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { ChangeSearchService } from '../../../../service/change-search.service';

@Component({
  selector: 'app-header-search',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './header-search.component.html',
  styleUrl: './header-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderSearchComponent {
  searchItem = '';

  constructor(private changeSearchService: ChangeSearchService){}

  searchOn(){
    this.changeSearchService.set(this.searchItem);
  }
}
