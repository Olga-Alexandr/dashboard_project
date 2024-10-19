import { Component } from '@angular/core';
import { CardsContainerComponent } from "../cards-container/cards-container.component";
import { CardComponent } from "../card/card.component";
import { AsyncPipe } from '@angular/common';
import { Observable, of, Subject } from 'rxjs';
import { Advert } from '../../interfaces/advert';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-my-adverts',
  standalone: true,
  imports: [CardsContainerComponent, CardComponent, AsyncPipe],
  templateUrl: './my-adverts.component.html',
  styleUrl: './my-adverts.component.scss'
})
export class MyAdvertsComponent {
  products$!: Observable<Advert[]>;
  private destroy$ = new Subject<void>();

  constructor(public authService: AuthService){}

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      if (user) {
        this.products$ = of(user.adverts);
        console.log(user.adverts);
      } else {
        console.log('ups');
      }
      // this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
}
