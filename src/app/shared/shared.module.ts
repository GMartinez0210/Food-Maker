import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';
import { RecipeCardModule } from './recipe-card/recipe-card.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarModule,
    RecipeCardModule
  ],
  exports: [ 
    NavbarModule,
    RecipeCardModule
  ]
})
export class SharedModule { }
