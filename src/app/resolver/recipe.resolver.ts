import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { RecipeService } from '../service/recipe.service';

export const initHomeAvailableRecipesResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
) => {
  return inject(RecipeService).initHomeAvailableRecipes();
};
