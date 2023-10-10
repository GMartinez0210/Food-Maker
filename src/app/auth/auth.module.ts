import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginModule,
    RegisterModule
  ]
})
export class AuthModule { }
