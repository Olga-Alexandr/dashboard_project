import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ButtonComponent } from "../../button/button.component";
import { AuthModalComponent } from '../../auth-modal/auth-modal.component';
import { ModalFullComponent } from '../../modal-full/modal-full.component';
import { RegModalComponent } from '../../reg-modal/reg-modal.component';
import { AuthService } from '../../../service/auth.service';
import { ToggleHiddenService } from '../../../service/toggle-hidden.service';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [ButtonComponent, AuthModalComponent, ModalFullComponent, RegModalComponent],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadingComponent implements OnInit, OnDestroy {
  userRole: boolean = false;
  userName: string | null = null;
  private destroy$ = new Subject<void>();
  
  constructor(public toggleHiddenService:ToggleHiddenService, public authService: AuthService, private cdr: ChangeDetectorRef
  ){}

  ngOnInit() {
    this.authService.user$.subscribe(user => {
      if (user) {
        this.userRole = true;
        this.userName = user.name;
        console.log(user);
      } else {
        this.userRole = false;
        this.userName = null;
      }
      this.cdr.markForCheck();
    });
  }

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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}


