import { Injectable } from '@angular/core';
import { IUser, IUserLogin, IUserRegister } from '../interface/user.interface';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from '../service/http.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userBehaviorSubject: BehaviorSubject<IUser> = new BehaviorSubject({} as IUser)
  $user = this.userBehaviorSubject.asObservable()

  constructor(
    private readonly httpService: HttpService,
    private readonly router: Router,
  ) { }

  login(body: IUserLogin) {
    const loginSubscription = this.httpService
      .post<IUser, object>(
        "/login",
        {
          correo: body.username,
          contrasenia: body.password,
        }
      )

    loginSubscription.subscribe(response => this.handleLogin(response))
  }

  handleLogin(response: IUser) {
    if(!response) {
      alert("No puedes logear")
      return 
    }

    sessionStorage.setItem("jwt", response.token)
    this.userBehaviorSubject.next(response)
    this.router.navigate(["/home"])
  }

  register(body: IUserRegister) {
    const registerSubscription = this.httpService
      .post<IUser, object>(
        "/registrar",
        {
          correo: body.email,
          nombre: body.name,
          contrasenia: body.password,
        }
      )

    registerSubscription.subscribe(response => this.handleRegister(response))
  }

  handleRegister(response: IUser) {
    this.userBehaviorSubject.next(response)
    this.router.navigate(["/login"])
  }
}
