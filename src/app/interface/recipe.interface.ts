import { ICategory } from "./category.interface"

export interface IAvailableRecipeIngredient {
    id:            number;
    name:          string;
    description:   string;
    quantity:      number;
}


export interface IAvailableRecipeResponse {
    receta: {
        idreceta:          number;
        nombre:            string;
        descripcion:       string;
        descripcioncorta:  string;
        instrucciones:     string;
        tiempopreparacion: number;
        idcategoria:       number;
        imagen:            null;
        objCategoria: {
            idcategoria: number;
            nombre:      string;
        };
    };
    ingredientes: {
        idingrediente: number;
        nombre:        string;
        descripcion:   string;
        cantidad:      number;
    }[];
    cantidadCoincidencias: number;
}

//

export interface IAvailableRecipes {
    id:          number;
    name:            string;
    description:       string;
    shortDescription:  string;
    instruction:     string;
    cookingTime: number;
    categoryId:       number;
    image:            string;
    category: ICategory;
    ingredients: IAvailableRecipeIngredient[]
}

export interface IParamFetchAvailableRecipes {
    cookingTime: number
}

export interface IFetchAvailableRecipesBody {
    tiempodecocina: number
}

export interface IParamFetchAvailableRecipesByCategory {
    categoryId: number
}

