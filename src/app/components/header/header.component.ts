import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { HeadingComponent } from "./heading/heading.component";
import { HeaderContentComponent } from "./header-content/header-content.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, HeadingComponent, HeaderContentComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

}
