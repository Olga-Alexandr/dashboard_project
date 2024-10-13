import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FilterProductsService } from '../../service/filter-products.service';
import { CardComponent } from '../card/card.component';
import { AsyncPipe } from '@angular/common';
import { CurrentSearchService } from '../../service/current-search.service';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';
import { CardsContainerComponent } from '../cards-container/cards-container.component';
import { ButtonComponent } from '../button/button.component';
import { CategoriesLightComponent } from './categories-light/categories-light.component';
import { Advert } from '../../interfaces/advert';
import { combineLatestWith, of, switchMap, takeUntil } from 'rxjs';
import { CurrentCategoryService } from '../../service/current-category.service';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [CardsContainerComponent, CardComponent, AsyncPipe, FormsModule, ButtonComponent, CategoriesLightComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPageComponent implements OnInit, OnDestroy {
  currentSearch: string = '';
  private destroy$ = new Subject<void>();
  products$!: Observable<Advert[]>;
  length = 0;

  constructor(
    private currentSearchService: CurrentSearchService,
    private currentCategoryService: CurrentCategoryService,
    private filterProductsService: FilterProductsService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.currentSearchService.currentSearch$
    .pipe(
    combineLatestWith(this.currentCategoryService.currentCategory$),
    takeUntil(this.destroy$),
    switchMap(([search, category]) => {
    this.currentSearch = search;
    return this.filterProductsService.get();
    })
    )
    .subscribe((response: Advert[]) => {
      this.length = response.length;
      this.products$ = of(response);
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
