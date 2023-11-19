import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject } from 'rxjs';
import { IFetchAvailableRecipesBody, IFetchAvailableRecipesResponse, IParamFetchAvailableRecipes, IRecipeAvailable } from '../interface/recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private availableRecipesBehaviorSubject: BehaviorSubject<IRecipeAvailable[]> = new BehaviorSubject([])
  $availableRecipes = this.availableRecipesBehaviorSubject.asObservable()

  constructor(
    private readonly httpService: HttpService
  ) { }

  fetchAvailableRecipes(params: IParamFetchAvailableRecipes) {
    const endpoint = "/receta/disponibilidad"

    const paramsAux: IFetchAvailableRecipesBody = {
      tiempodecocina: params.cookingTime
    }

    const availableRecipesObservable = this.httpService
      .post<
        IFetchAvailableRecipesResponse[], 
        IFetchAvailableRecipesBody
      >(endpoint, paramsAux)

    availableRecipesObservable.subscribe(response => this.handleFetchAvailableRecipes(response))
  }

  private handleFetchAvailableRecipes(response: IFetchAvailableRecipesResponse[]) {
    const responseAux = response.map(
      item => ({
        order: item.orden,
        duration: item.duracion,
        name: item.nombre,
        description: item.descripcioncorta,
        ingredients: item.ingredientes,
        image: item.imagen
      })
    )

    this.availableRecipesBehaviorSubject.next(responseAux)
  }
}
