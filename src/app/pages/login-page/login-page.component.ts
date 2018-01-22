import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  private login: string;
  private password: string;

  constructor(public loginService: LoginService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.login && this.password) {
      this.loginService.login(this.login, this.password);
      this.login = '';
      this.password = '';
    }
  }
}
