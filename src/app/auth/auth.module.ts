import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from '../view/welcome/welcome.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "welcome",
    component: WelcomeComponent
  },
  {
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full'
  },
  {
    path:'**',
    component:PageNotFoundComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    LoginModule,
    RegisterModule
  ]
})
export class AuthModule { }
