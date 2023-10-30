import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthModule } from './auth/auth.module';
import { ViewModule } from './view/view.module';
import { WelcomeComponent } from './view/welcome/welcome.component';


const routes: Routes = [
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthModule,
    ViewModule,
  ],
  exports: [
    RouterModule,
    AuthModule,
    ViewModule,
  ]
})
export class AppRoutingModule { }
