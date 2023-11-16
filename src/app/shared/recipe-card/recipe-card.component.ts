import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent {
  cardImage = "./assets/LogoFoodmaker.PNG"
  cardName = "Pizza Pepperoni"
  cookingTime = "1h"
}
