export interface IRecipeAvailable {
    order: number
    duration: number
    name: string
    description: string
    ingredients: any[]
    image: string
}

export interface IFetchAvailableRecipesResponse {
    orden: number
    duracion: number
    nombre: string
    descripcioncorta: string
    ingredientes: any[]
    imagen: string
}

export interface IParamFetchAvailableRecipes {
    cookingTime: number
}

export interface IFetchAvailableRecipesBody {
    tiempodecocina: number
}
