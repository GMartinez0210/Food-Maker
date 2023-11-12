import { Injectable } from '@angular/core';
import { IUser, IUserLogin, IUserRegister } from '../interface/user.interface';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from '../service/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userBehaviorSubject: BehaviorSubject<IUser> = new BehaviorSubject(null)
  $user = this.userBehaviorSubject.asObservable()

  constructor(
    private readonly httpService: HttpService,
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

    loginSubscription.subscribe(this.handleLogin)
  }

  handleLogin(response: IUser) {
    this.userBehaviorSubject.next(response)
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

    registerSubscription.subscribe(this.handleRegister)
  }

  handleRegister(response: IUser) {
    this.userBehaviorSubject.next(response)
  }
}
