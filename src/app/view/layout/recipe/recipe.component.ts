import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IAvailableRecipeIngredient, IAvailableRecipes, IParamFetchAddRecipeBody } from 'src/app/interface/recipe.interface';
import { RecipeService } from 'src/app/service/recipe.service';
import { AddIngredientComponent } from 'src/app/shared/dialog/ingredient/add-ingredient/add-ingredient.component';
import { IAddIngredientData } from 'src/app/shared/dialog/ingredient/add-ingredient/interfaces/add-ingredient.interface';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  formRecipe: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    instructions: new FormControl(null, [Validators.required]),
    cookingTimeHours: new FormControl(null, [Validators.required]),
    cookingTimeMinutes: new FormControl(null, [Validators.required]),
    cookingTimeSeconds: new FormControl(null, [Validators.required]),
  })

  ingredients: IAddIngredientData[] = []

  constructor(
    private readonly matDialog: MatDialog,
    private readonly recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
    
  }

  handleSubmit() {
    const ingredients = this.ingredients
    
    if(!ingredients.length) {
      alert("Pon ingredientes")
      return
    }

    const ingredientsAux = ingredients.map(
      (ingredient) => ingredient as IAvailableRecipeIngredient
    )
    
    const formRecipeData = this.formRecipe.value
    const body: IAvailableRecipes = {
      name: formRecipeData?.title,
      description: formRecipeData?.title,
      shortDescription: formRecipeData?.title,
      instruction: formRecipeData?.title,
      cookingTime: formRecipeData?.title,
      categoryId: formRecipeData?.title,
      image: formRecipeData?.title,
      category: formRecipeData?.title,
      ingredients: ingredientsAux,
    } as IAvailableRecipes

    const params: IParamFetchAddRecipeBody = {
      recipes: body
    }

    this.recipeService.fetchAddRecipe(params)
  }

  handleAddIngredient() {
    const ingredient: IAddIngredientData = {} as IAddIngredientData

    const addIngredientDialog = this.matDialog.open(AddIngredientComponent, { data: ingredient })
    addIngredientDialog.afterClosed().subscribe(
      (ingredient) => this.ingredients.push(ingredient)
    )
  }
}
