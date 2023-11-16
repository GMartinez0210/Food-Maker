import { Injectable } from '@angular/core';
import { IUser, IUserLogin, IUserRegister } from '../interface/user.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpService } from '../service/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userBehaviorSubject: BehaviorSubject<IUser> = new BehaviorSubject(null)
  $user = this.userBehaviorSubject.asObservable()

  private loginStatusSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loginStatus$: Observable<boolean> = this.loginStatusSubject.asObservable();


  constructor(
    private readonly httpService: HttpService,
  ) { }

  login(body: IUserLogin):Observable<any> {
    const credentials = btoa(`${body.email}:${body.password}`);
    const headers = new HttpHeaders({
      Authorization: `Basic ${credentials}`,
    });
    
    return this.httpService
      .post<IUser, object>(
        "/login",
        {
          correo: body.email,
          contrasenia: body.password,
          
        },
        {headers}
      );
  }

  handleLogin(response: IUser) {
  
      this.userBehaviorSubject.next(response);
     this.loginStatusSubject.next(true);
  }

  register(body: IUserRegister): Observable<IUser> {
    return this.httpService.post<IUser, object>("/registrar", {
      correo: body.email,
      nombre: body.name,
      contrasenia: body.password,
    });
  }
  

}
