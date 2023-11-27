import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteComponent } from './favorite.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FavoriteDetailModule } from './favorite-detail/favorite-detail.module';



@NgModule({
  declarations: [ FavoriteComponent ],
  imports: [
    CommonModule,
    SharedModule,
    FavoriteDetailModule,
  ]
})
export class FavoriteModule { }
