import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { PartialsComponent } from './partials.component';

const routes: Routes = [
  {
    path: "",
    component: PartialsComponent,
    children: [
      {
        path: "home",
        component: HomeComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HomeModule,
  ],
})
export class PartialsRoutingModule { }
