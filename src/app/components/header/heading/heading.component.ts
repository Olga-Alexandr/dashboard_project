import { UserRoleService } from './../../../service/user-role.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from "../../button/button.component";
import { AuthModalComponent } from '../../auth-modal/auth-modal.component';
import { ModalFullComponent } from '../../modal-full/modal-full.component';
import { RegModalComponent } from '../../reg-modal/reg-modal.component';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [ButtonComponent, AuthModalComponent, ModalFullComponent, RegModalComponent],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadingComponent {
  userRole = new UserRoleService;
  // userRole: 'guest' | 'user' | 'admin' = 'user'; //получатьтекущее значение
  userName = 'user.name';//получатьтекущее значение

  
  close(selector:string): void {
    const elem = document.querySelector(selector);
    if (elem) {
      elem.classList.toggle('hidden');
    }
  }

  showNav(){
    // this.close('nav');//don't worke
    const nav = document.querySelector('nav');
    if (nav) {
      nav.classList.toggle('hidden');
    }
  }

  showDialog(value:string):void{
    // this.close('app-modal-full');
    const modalWindow = document.querySelector('.modal-window');
    if (modalWindow) {
      modalWindow.classList.toggle('hidden');
    }
    if(value==="login"){
      this.userRole.setUserRole('user');//change on TODO
      // this.close('app-auth-modal');
      const authModal=document.querySelector('app-auth-modal');
      if(authModal){
        authModal.classList.toggle('hidden');
      }
    }
    if(value==="signup"){
      // this.close('app-auth-modal');
      const regModal=document.querySelector('app-reg-modal');
      if(regModal){
        regModal.classList.toggle('hidden');
      }
    }
  }
}


