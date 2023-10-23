import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipeComponent } from './add-recipe.component';



@NgModule({
  declarations: [AddRecipeComponent],
  imports: [
    CommonModule
  ],
  exports: [AddRecipeComponent],
})
export class AddRecipeModule { }
