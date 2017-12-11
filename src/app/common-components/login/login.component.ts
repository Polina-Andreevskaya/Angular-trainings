import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: string;

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.name = this.loginService.getUserInfo();
  }

  logout() {
    this.loginService.logout();
  }

}
