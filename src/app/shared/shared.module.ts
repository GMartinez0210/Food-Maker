import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';
import { RecipeCardModule } from './recipe-card/recipe-card.module';
import { RecipeCardsModule } from './recipe-cards/recipe-cards.module';
import { CategoryCardModule } from './category-card/category-card.module';
import { CategoryCardsModule } from './category-cards/category-cards.module';
import { CollectionCardModule } from './collection-card/collection-card.module';
import { CollectionCardsModule } from './collection-cards/collection-cards.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarModule,
    RecipeCardModule,
    RecipeCardsModule,
    CategoryCardModule,
    CategoryCardsModule,
    CollectionCardModule,
    CollectionCardsModule
  ],
  exports: [ 
    NavbarModule,
    RecipeCardModule,
    RecipeCardsModule,
    CategoryCardModule,
    CategoryCardsModule,
    CollectionCardModule,
    CollectionCardsModule,
  ]
})
export class SharedModule { }
