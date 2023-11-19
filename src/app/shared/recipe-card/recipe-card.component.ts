import { Component, Input, OnInit } from '@angular/core';
import { IRecipeAvailable } from 'src/app/interface/recipe.interface';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {
  @Input()
  availableRecipe: IRecipeAvailable

  cardImage: string
  cardName: string
  cookingTime: string
  ingredients: number

  ngOnInit(): void {
    this.cardImage = this.availableRecipe.image 
      ? `data:image/png;base64,${this.availableRecipe.image}`
      : "/assets/recipe-card/recipe-card-loader.gif"
    
    this.cardName = this.availableRecipe.name
    this.cookingTime = `${this.availableRecipe.duration}min`
    this.ingredients = this.availableRecipe.ingredients.length
  }
}
