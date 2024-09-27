import { UserRoleService } from './../../../service/user-role.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from "../../button/button.component";

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadingComponent {
  userRole = new UserRoleService;
  // userRole: 'guest' | 'user' | 'admin' = 'user'; //получатьтекущее значение
  userName = 'user.name';//получатьтекущее значение

  showNav(){
    const nav = document.querySelector('nav');
    if (nav) {
      nav.classList.toggle('hidden');
    }
  }
  login(){
    this.userRole.setUserRole('user');
    // this.showNav;
  }

}


