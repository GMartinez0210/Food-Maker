import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import * as jsonwebtoken from "jsonwebtoken"

import { HttpService } from './http.service';
import { IUser } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userBehaviorSubject: BehaviorSubject<IUser> = new BehaviorSubject({} as IUser)
  user$ = this.userBehaviorSubject.asObservable()

  getUser() {
    return this.userBehaviorSubject.value
  }

  setUser(user: IUser) {
    this.userBehaviorSubject.next(user)
  }

  fetchCurrentUser(): IUser {
    const userString = sessionStorage.getItem("user")
    const user = JSON.parse(userString)
    
    this.userBehaviorSubject.next(user)

    return user
  }
}
