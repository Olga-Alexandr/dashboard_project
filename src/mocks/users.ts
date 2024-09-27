import { of } from 'rxjs';

export const users$ = of ([
  {id: 0, numberPhone: 0, password: '0', adsId: [], name: 'Admin', userRole: 'admin', address: 'Москва, Ленинский проспект'},
  {id: 1, numberPhone: 7777777, password: '0000', adsId: [2, 5], name: 'Василий', userRole: 'user', address: 'Москва, Ленинский проспект'},
  {id: 2, numberPhone: 6666666, password: '0000', adsId: [1, 9], name: 'Анна', userRole: 'user', address: 'Севастополь, Античный проспект'},
  {id: 3, numberPhone: 5555555, password: '0000', adsId: [11, 8, 10, 6, 4], name: 'Шурик', userRole: 'user', address: 'Томск, Ленинский проспект'},
  {id: 4, numberPhone: 4444444, password: '0000', adsId: [3, 7, 12], name: 'Марина', userRole: 'user', address: 'Москва, Ленинский проспект'},
])
