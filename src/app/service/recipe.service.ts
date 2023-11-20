import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject } from 'rxjs';
import { IFetchAvailableRecipesBody, IParamFetchAvailableRecipes, IAvailableRecipes, IParamFetchAvailableRecipesByCategory, IAvailableRecipeResponse, IAvailableRecipeIngredient } from '../interface/recipe.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private showAvailableRecipesBehaviorSubject: BehaviorSubject<IAvailableRecipes[]> = new BehaviorSubject([])
  $showAvailableRecipes = this.showAvailableRecipesBehaviorSubject.asObservable()
  
  private availableRecipesBehaviorSubject: BehaviorSubject<IAvailableRecipes[]> = new BehaviorSubject([])
  $availableRecipes = this.availableRecipesBehaviorSubject.asObservable()
  
  private availableRecipesByCategoryBehaviorSubject: BehaviorSubject<IAvailableRecipes[]> = new BehaviorSubject([])
  $availableRecipesByCategory = this.availableRecipesByCategoryBehaviorSubject.asObservable()

  constructor(
    private readonly router: Router,
    private readonly httpService: HttpService,
  ) { }

  initHomeAvailableRecipes() {
    const availableRecipes = this.showAvailableRecipesBehaviorSubject.value

    if(availableRecipes.length) return

    this.router.navigate(["/welcome"])
  }

  getAvailableRecipes() {
    const currentAvailableRecipes = this.availableRecipesBehaviorSubject.value

    if(!currentAvailableRecipes.length) return

    this.setAvailableRecipes(currentAvailableRecipes)
  }

  fetchAvailableRecipes(params: IParamFetchAvailableRecipes) {
    const endpoint = "/receta/disponibilidad"

    const paramsAux: IFetchAvailableRecipesBody = {
      tiempodecocina: params.cookingTime
    }

    const availableRecipesObservable = this.httpService
      .post<
        IAvailableRecipeResponse[], 
        IFetchAvailableRecipesBody
      >(endpoint, paramsAux)

    availableRecipesObservable.subscribe(response => this.handleFetchAvailableRecipes(response))
  }

  private handleFetchAvailableRecipes(response: IAvailableRecipeResponse[]) {
    const responseAux: IAvailableRecipes[] = this.adapterAvailableRecipes(response)

    this.setAvailableRecipes(responseAux)

    this.router.navigate(["/home"])
  }

  private setAvailableRecipes(availableRecipes: IAvailableRecipes[]) {
    this.availableRecipesBehaviorSubject.next(availableRecipes)
    this.showAvailableRecipesBehaviorSubject.next(availableRecipes)
  }

  getAvailableRecipesByCategory() {
    const currentAvailableRecipes = this.availableRecipesByCategoryBehaviorSubject.value
    
    if(!currentAvailableRecipes.length) return

    this.setAvailableRecipesByCategory(currentAvailableRecipes)
  }

  fetchAvailableRecipesByCategory(params: IParamFetchAvailableRecipesByCategory) {
    const { categoryId } = params
    
    const endpoint = `/recetac/${categoryId}`

    const availableRecipesByCategoryObservable = this.httpService.get<IAvailableRecipeResponse[]>(endpoint)
    availableRecipesByCategoryObservable.subscribe(
      (response) => this.handleFetchAvailableRecipesByCategory(response)
    )
  }

  private handleFetchAvailableRecipesByCategory(response: IAvailableRecipeResponse[]) {
    const responseAux: IAvailableRecipes[] = this.adapterAvailableRecipes(response)

    this.setAvailableRecipesByCategory(responseAux)
  }

  private setAvailableRecipesByCategory(availableRecipes: IAvailableRecipes[]) {
    this.availableRecipesByCategoryBehaviorSubject.next(availableRecipes)
    this.showAvailableRecipesBehaviorSubject.next(availableRecipes)
  }
  
  private adapterAvailableRecipes(response: IAvailableRecipeResponse[]) {
    const responseAux: IAvailableRecipes[] = response.map(
      item => {
        const ingredients: IAvailableRecipeIngredient[] = item.ingredientes.map(
          ingredient => ({
            id: ingredient.idingrediente,
            name: ingredient.nombre,
            description: ingredient.descripcion,
            quantity: ingredient.cantidad,
          })
        )

        const category = {
          id: item.receta.objCategoria.idcategoria,
          name: item.receta.objCategoria.nombre,
        }

        const {
          nombre: name,
          imagen: image,
          idcategoria: id,
          idcategoria: categoryId,
          descripcion: description,
          instrucciones: instruction,
          tiempopreparacion: cookingTime,
          descripcioncorta: shortDescription,
        } = item.receta

        const result = {
          id,
          name,
          image,
          category,
          categoryId,
          ingredients,
          instruction,
          description,
          cookingTime,
          shortDescription,
        }

        return result
      }
    )

    return responseAux
  }
}
