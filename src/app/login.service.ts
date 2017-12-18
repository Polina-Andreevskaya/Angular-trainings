import {Injectable} from '@angular/core';
import {UserModel} from './common-components/user.model';

@Injectable()
export class LoginService {

  private activeUser: UserModel;

  constructor() {
  }

  login(login: string, password: string): UserModel {
    let mockUser = new UserModel(1, 'tempUser', 'password');
    localStorage.setItem('tempUser', JSON.stringify(mockUser));
    this.activeUser = mockUser;
    this.isAuthenticated();
    return mockUser;
  }

  logout() {
    if (this.isAuthenticated()) {
      localStorage.removeItem(this.activeUser.login);
      this.activeUser = null;
    }
  }

  isAuthenticated(): boolean {
    return !!this.activeUser;
  }

  getUserInfo(): string {
    return this.isAuthenticated() ? JSON.parse(localStorage.getItem(this.activeUser.login)).login : null;
  }

}
