import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ButtonComponent } from "../../button/button.component";
import { AuthModalComponent } from '../../auth-modal/auth-modal.component';
import { ModalFullComponent } from '../../modal-full/modal-full.component';
import { RegModalComponent } from '../../reg-modal/reg-modal.component';
import { AuthService } from '../../../service/auth.service';

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
  // constructor(@Inject(AuthService) private authService = new AuthService){
    // user:{
    //   "login": "string",
    //   "password": "string",
    // }
  // }

  toggleHidden(selector:string): void {
    const elem = document.querySelector(selector);
    // console.log(elem, selector);
    if (elem) {
      elem.classList.toggle('hidden');
    }
  }

  // showNav(){
  //   this.toggleHidden('nav');
  // }

  showDialog(value:string):void{
    this.toggleHidden('.modal-window');
    if(value==="login"){
      // this.userRole.setUserRole('user');//change on TODO
      this.toggleHidden('app-auth-modal');
    }
    if(value==="signup"){
      this.toggleHidden('app-reg-modal');
    }
  }
}


