import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryComponent } from './category/category.component';
import { CategoryModule } from './category/category.module';
import { AccountComponent } from './account/account.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AccountModule } from './account/account.module';
import { AddRecipeModule } from './add-recipe/add-recipe.module';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';
import { UpdateRecipeModule } from './update-recipe/update-recipe.module';
import { FavoriteModule } from './favorite/favorite.module';
import { FavoriteComponent } from './favorite/favorite.component';
import { authGuard } from 'src/app/auth/auth.guard';
import { fetchCategoriesResolver } from 'src/app/resolver/category.resolver';
import { fetchCurrentUserResolver } from 'src/app/resolver/user.resolver';
import { initHomeAvailableRecipesResolver } from 'src/app/resolver/recipe.resolver';
import { fetchCollectionsResolver } from 'src/app/resolver/collection.resolver';
import { FavoriteDetailComponent } from './favorite/favorite-detail/favorite-detail.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeModule } from './recipe/recipe.module';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "welcome"
  },
  {
    path: "",
    component: LayoutComponent,
    canActivate: [authGuard],
    resolve: [fetchCurrentUserResolver, initHomeAvailableRecipesResolver],
    children: [
      {
        path: "home",
        component: HomeComponent,
        canActivate: [authGuard],
        resolve: [fetchCurrentUserResolver],
      },
      {
        path: "category",
        component: CategoryComponent,
        canActivate: [authGuard],
        resolve: [fetchCategoriesResolver]
      },
      {
        path: "recipe",
        canActivate: [authGuard],
        children: [
          {
            path: "",
            component: RecipeComponent,
            canActivate: [authGuard],
          },
          {
            path: "**",
            component: RecipeComponent,
            canActivate: [authGuard],
          },
        ]
      },
      {
        path: "favorite",
        canActivate: [authGuard],
        resolve: [fetchCollectionsResolver],
        children: [
          {
            path: "",
            component: FavoriteComponent,
            canActivate: [authGuard],
            resolve: [fetchCollectionsResolver],
          },
          {
            path: "**",
            component: FavoriteDetailComponent,
            canActivate: [authGuard],
            resolve: [fetchCollectionsResolver],
          }
        ]
      },
      {
        path: "account",
        component: AccountComponent,
        canActivate: [authGuard],
      }
    ]
  }
];

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HomeModule,
    CategoryModule,
    AccountModule,
    RecipeModule,
    AddRecipeModule,
    UpdateRecipeModule,
    FavoriteModule,
    SharedModule
  ]
})
export class LayoutModule { }
