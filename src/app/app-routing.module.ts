import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { ViewRoutingModule } from './view/view-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    ViewRoutingModule,
  ],
  exports: [
    RouterModule, 
    AuthRoutingModule,
    ViewRoutingModule
  ]
})
export class AppRoutingModule { }
