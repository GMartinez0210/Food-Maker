import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';
import { RecipeCardModule } from './recipe-card/recipe-card.module';
import { RecipeCardsModule } from './recipe-cards/recipe-cards.module';
import { CategoryCardsComponent } from './category-cards/category-cards.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { CategoryCardModule } from './category-card/category-card.module';
import { CategoryCardsModule } from './category-cards/category-cards.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarModule,
    RecipeCardModule,
    RecipeCardsModule,
    CategoryCardModule,
    CategoryCardsModule,
  ],
  exports: [ 
    NavbarModule,
    RecipeCardModule,
    RecipeCardsModule,
    CategoryCardModule,
    CategoryCardsModule,
  ]
})
export class SharedModule { }
