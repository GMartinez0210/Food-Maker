import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    WelcomeComponent
  ]
})
export class WelcomeModule { }
