import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { CurrentCategoryService } from '../../../service/current-category.service';
import { SearchPageComponent } from '../search-page.component';

@Component({
  selector: 'app-categories-light',
  standalone: true,
  imports: [],
  templateUrl: './categories-light.component.html',
  styleUrl: './categories-light.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesLightComponent implements AfterViewInit {

  constructor(private currentCategoryService: CurrentCategoryService, private searchPageComponent:SearchPageComponent){}

  ngAfterViewInit() {
    const categories = document.querySelectorAll('li');
    categories.forEach(category => {
      category.addEventListener('click', () => {
        // befor TO DO
        const categoryId = category.getAttribute('id');
        if (categoryId) {
          this.currentCategoryService.set(categoryId);
          this.searchPageComponent.currentSearch += " " + category.textContent;
        }
      });
    });
  }

}
