import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { FilterProductsService } from '../../service/filter-products.service';
import { Observable, of, Subject } from 'rxjs';
import { Advert } from '../../interfaces/advert';
import { ChangeSearchService } from '../../service/change-search.service';

@Component({
  selector: 'app-cards-container',
  standalone: true,
  imports: [CardComponent, AsyncPipe, NgFor],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsContainerComponent implements OnInit, OnDestroy {
  products$!: Observable<Advert[]>;
  private destroy$ = new Subject<void>();

  constructor(
    private changeSearchService: ChangeSearchService,
    private filterProductsService: FilterProductsService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.changeSearchService.set('');
    this.filterProductsService.get()
      .subscribe((respones: Advert[]) => {
        this.products$ = of(respones);
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
