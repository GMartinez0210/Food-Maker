export interface IRecipeAvailable {
    order: number
    duration: number
    name: number
    description: String
    ingredients: any[]
    image: String
}

export interface IFetchAvailableRecipesResponse {
    orden: number
    duracion: number
    nombre: number
    descripcioncorta: String
    ingredientes: any[]
    imagen: String
}

export interface IParamFetchAvailableRecipes {
    cookingTime: number
}

export interface IFetchAvailableRecipesBody {
    tiempodecocina: number
}
