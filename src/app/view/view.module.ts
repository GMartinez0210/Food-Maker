import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeModule } from './welcome/welcome.module';
import { LayoutModule } from './layout/layout.module';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  {
    path: "welcome",
    component: WelcomeComponent
  },
  { path: 'home/:tiempo', 
  component: HomeComponent},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WelcomeModule,
    LayoutModule
  ],
  exports:[
    RouterModule
  ]
})
export class ViewModule { }
