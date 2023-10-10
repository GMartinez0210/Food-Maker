import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsRoutingModule } from './partials-routing.module';
import { HomeModule } from './home/home.module';
import { PartialsComponent } from './partials.component';
import { NavbarModule } from 'src/app/shared/navbar/navbar.module';

@NgModule({
  declarations: [
    PartialsComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    NavbarModule,
  ],
  exports: [
    PartialsComponent
  ]
})
export class PartialsModule { }
