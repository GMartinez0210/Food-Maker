import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from './partials/partials.module';
import { WelcomeModule } from './welcome/welcome.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WelcomeModule,
    PartialsModule,
  ]
})
export class ViewModule { }
