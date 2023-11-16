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
  private userEmail: string = '';
  private userPassword: string = '';

  constructor(
    private readonly httpService: HttpService,
  ) { }

  login(body: IUserLogin):Observable<any> {

    
    this.userEmail = body.email;
    this.userPassword = body.password;

    return this.httpService
      .post<IUser, object>(
        "/login",
        {
          correo: body.email,
          contrasenia: body.password,
          
        },
      
      );
  }

  handleLogin(response: IUser) {
  
      this.userBehaviorSubject.next(response);
     this.loginStatusSubject.next(true);
  }

  getUserCredentials(): { userEmail: string, userPassword: string } {
    return { userEmail: this.userEmail, userPassword: this.userPassword };
  }

  register(body: IUserRegister): Observable<IUser> {
    return this.httpService.post<IUser, object>("/registrar", {
      correo: body.email,
      nombre: body.name,
      contrasenia: body.password,
    });
  }
  

}
