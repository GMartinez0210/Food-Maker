import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HomeModule } from './home/home.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryComponent } from './category/category.component';
import { CategoryModule } from './category/category.module';
import { AccountComponent } from './account/account.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AccountModule } from './account/account.module';
import { AddRecipeModule } from './add-recipe/add-recipe.module';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "category",
        component: CategoryComponent
      },
      {
        path: "favorite",
        component: HomeComponent
      },
      {
        path: "account",
        component: AccountComponent
      },
      {
        path: "**",
        redirectTo: "/home"
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
    AddRecipeModule,
    SharedModule
  ]
})
export class LayoutModule { }
