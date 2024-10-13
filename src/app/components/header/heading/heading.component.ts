import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ButtonComponent } from "../../button/button.component";
import { AuthModalComponent } from '../../auth-modal/auth-modal.component';
import { ModalFullComponent } from '../../modal-full/modal-full.component';
import { RegModalComponent } from '../../reg-modal/reg-modal.component';
import { AuthService } from '../../../service/auth.service';
import { ToggleHiddenService } from '../../../service/toggle-hidden.service';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [ButtonComponent, AuthModalComponent, ModalFullComponent, RegModalComponent],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadingComponent {
  // userRole = new UserRoleService;

  userRole: 'guest' | 'user' | 'admin' = 'guest'; //получатьтекущее значение
  userName = 'user.name';//получатьтекущее значение
  
  constructor(public toggleHiddenService:ToggleHiddenService){}

  showDialog(value:string):void{
    this.toggleHiddenService.toggleHidden('.modal-window');
    if(value==="login"){
      // this.userRole.setUserRole('user');//change on TODO
      this.toggleHiddenService.toggleHidden('app-auth-modal');
    }
    if(value==="signup"){
      this.toggleHiddenService.toggleHidden('app-reg-modal');
    }
  }
}


