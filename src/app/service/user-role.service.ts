import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  public userRole: 'guest' | 'user' | 'admin' = 'guest';

  constructor() { }

  setUserRole(role: 'guest' | 'user' | 'admin') {
    this.userRole = role;
  }

  getUserRole(): 'guest' | 'user' | 'admin' {
    return this.userRole;
  }
  
}
