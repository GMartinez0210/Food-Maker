import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { IUserRegister } from 'src/app/interface/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationMessage: string;

  registerForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),
    name: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });

  constructor(
    private readonly authService: AuthService, private router:Router
  ) {}

  handleRegisterSubmit() {
    const isValid = this.registerForm.valid

    if(!isValid) {
      alert("Revise los datos ingresados")
      return
    }

    if (this.registerForm.valid) {
    
      this.authService.register(this.registerForm.value).subscribe(
        (response:any) => {
          this.registrationMessage = 'Registro Exitoso';
          alert(this.registrationMessage); 
          this.router.navigate(['/login']);
        },
        (error:any) => {
          console.error("Error en el registro:", error);
          this.registrationMessage = 'Error en el Registro';
          alert(this.registrationMessage); 
          
        }
      );
    }
  }

    
  }

