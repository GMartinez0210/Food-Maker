import { Component, Input, OnInit } from '@angular/core';
import { IAvailableRecipes } from 'src/app/interface/recipe.interface';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {
  @Input()
  showAvailableRecipe: IAvailableRecipes

  image: string
  name: string
  cookingTime: string
  ingredients: number

  ngOnInit(): void {
    this.image = this.showAvailableRecipe.image 
      ? `data:image/png;base64,${this.showAvailableRecipe.image}`
      : "/assets/recipe-card/recipe-card-loader.gif"
    
    this.name = this.showAvailableRecipe.name
    this.cookingTime = `${this.showAvailableRecipe.cookingTime}min`
    this.ingredients = this.showAvailableRecipe.ingredients.length
  }
}
