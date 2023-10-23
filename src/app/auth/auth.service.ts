import { Injectable } from '@angular/core';
import { IUser, IUserLogin } from '../interface/user.interface';
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
      .post<IUser, IUserLogin>(
        "/login",
        body
      )

    loginSubscription.subscribe(this.handleLogin)
  }

  handleLogin(response: IUser) {
    this.userBehaviorSubject.next(response)
  }
}
