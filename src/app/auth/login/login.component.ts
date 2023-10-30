import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { IUser, IUserLogin } from 'src/app/interface/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", [Validators.required]),
  });

  user: IUser;

  constructor(
    private readonly authService: AuthService, private router: Router
  ) {
    
  }

  takeUser() {
    this.authService.$user.subscribe(
      user => this.user = user
    )
  }

  handleLoginSubmit() {
    const isValid = this.loginForm.valid

    if(!isValid) {
      alert("Revise los datos ingresados")
      return
    }

    const body: IUserLogin = this.loginForm.value

    this.authService.login(body).subscribe(
      (response) => {
       
        alert("Logeo exitoso");
        this.router.navigate(['/welcome',{nombre:response.nombre}]);
      },
      (error) => {
        console.error("Error en el logeo:", error);
        alert("Error al iniciar sesión");
        
      }
    );
  }
}
