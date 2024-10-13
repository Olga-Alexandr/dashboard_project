import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Pipe({
  name: 'getUrlImg',
  standalone: true
})
export class GetUrlImgPipe implements PipeTransform {
  
  constructor(private authService: AuthService) { }

  transform(url: string): string {
    return `${this.authService.apiUrl}/images/${url}`;
  }
}
