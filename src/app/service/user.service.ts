import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userBehaviorSubject = new BehaviorSubject<any>({})
  user$ = this.userBehaviorSubject.asObservable()

  constructor(
    private readonly httpService: HttpService,
  ) { }

  findOne() {
    const endpoint = "/user"
    this.httpService.get(endpoint).subscribe(
      (response) => this.userBehaviorSubject.next(response) 
    )
  }
}
