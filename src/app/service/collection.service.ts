import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject } from 'rxjs';
import { ICollection, ICollectionResponse } from '../interface/collection.interface';
import { IAvailableRecipeBase } from '../interface/recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private collectionsBehaviorSubject: BehaviorSubject<ICollection[]> = new BehaviorSubject([])
  $collections = this.collectionsBehaviorSubject.asObservable()

  constructor(
    private readonly httpService: HttpService,
  ) { }

  getCollections() {
    return this.collectionsBehaviorSubject.value
  }

  setCollections(collections: ICollection[]) {
    this.collectionsBehaviorSubject.next(collections)
  }

  fetchCollections() {
    const collections = this.getCollections()

    if(collections.length) return

    const endpoint = "/getcoleccion"
    
    const collectionObservable = this.httpService.get<ICollectionResponse[]>(endpoint)
    collectionObservable.subscribe(response => this.handleFetchCollections(response))
  }

  private handleFetchCollections(response: ICollectionResponse[]) {
    const responseAux: ICollection[] = response.map(
      item => {
        const recipes: IAvailableRecipeBase[] = item.recetas.map(
          recipe => ({
            id: recipe.idreceta,
            name: recipe.nombre,
            description: recipe.descripcion,
            shortDescription: recipe.descripcioncorta,
            instruction: recipe.instrucciones,
            cookingTime: recipe.tiempopreparacion,
            categoryId: recipe.idcategoria,
            image: recipe.imagen,
            category: {
              id: recipe.objCategoria.idcategoria,
              name: recipe.objCategoria.nombre
            }
          })
        )

        const result: ICollection = {
          recipes,
          id: item.id,
          name: item.nomnre,
        }

        return result
      }
    )

    this.collectionsBehaviorSubject.next(responseAux)
  }
}
