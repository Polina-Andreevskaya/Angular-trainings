import {UserInterface} from './user.interface';

export class UserModel implements UserInterface {
  constructor(
    public id: number,
    public login: string,
    public password: string
  ) {}
}
