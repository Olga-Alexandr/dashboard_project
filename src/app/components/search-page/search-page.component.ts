import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FilterProductsService } from '../../service/filter-products.service';
import { CardComponent } from '../card/card.component';
import { AsyncPipe } from '@angular/common';
import { CurrentSearchService } from '../../service/current-search.service';
import { map, takeUntil } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs/internal/Subject';
import { products$ } from '../../../mocks/products';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [CardComponent, AsyncPipe, FormsModule],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPageComponent implements OnInit, OnDestroy {
  currentSearch: string = '';
  private destroy$ = new Subject<void>();
  products$ = products$.pipe(
    map(products => products.filter(product => product.name === this.currentSearchService.get()))
  );
  
  constructor(
    private currentSearchService: CurrentSearchService, 
    private filterProductsService: FilterProductsService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    // this.products$ = this.filterProductsService.get();
    this.currentSearchService.currentSearch$
    .pipe(takeUntil(this.destroy$))
    .subscribe(value => {
      this.currentSearch = value;
      this.products$ = this.filterProductsService.get();
      this.cdr.markForCheck();
    });
  }
    
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}