import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { IUser, IUserLogin } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", [Validators.required]),
  });

  user: IUser;

  constructor(
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    
  }

  takeUser() {
    this.authService.$user.subscribe(
      user => this.user = user
    )
  }

  handleLoginSubmit() {
    const isValid = this.loginForm.valid

    if(!isValid) {
      alert("Ta mal")
      return
    }

    const body: IUserLogin = this.loginForm.value

    this.authService.login(body)
  }
}
