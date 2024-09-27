import { Routes } from '@angular/router';
// import { MainPageComponent } from './components/main-page/main-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Главная',
    // component: MainPageComponent,
    loadComponent: () => import('./components/main-page/main-page.component').then(c => c.MainPageComponent)
  },
  {
    path: 'search',
    title: 'Поиск',
    // component: SearchPageComponent,
    loadComponent: () => import('./components/search-page/search-page.component').then(c => c.SearchPageComponent)
  },
  {
    path: 'product-card',
    title: 'Информация о товаре',
    loadComponent: () => import('./components/product-card/product-card.component').then(c => c.ProductCardComponent)
  },
];
