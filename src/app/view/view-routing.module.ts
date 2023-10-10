import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeModule } from './welcome/welcome.module';
import { PartialsModule } from './partials/partials.module';
import { PartialsRoutingModule } from './partials/partials-routing.module';

const routes: Routes = [
  {
    path: "welcome",
    component: WelcomeComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PartialsRoutingModule,
    WelcomeModule,
    PartialsModule
  ],
  exports: [
    PartialsRoutingModule,
  ]
})
export class ViewRoutingModule { }
