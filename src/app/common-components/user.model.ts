import {UserInterface} from './user.interface';
export class UserModel implements UserInterface {
  id: number;
  login: string;
  password: string;

  constructor(id: number, login: string, password: string) {
    this.id = id;
    this.login = login;
    this.password = password;
  }
}
