import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteComponent } from './favorite.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FavoriteComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FavoriteModule { }
