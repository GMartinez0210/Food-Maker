import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IParamFetchAvailableRecipes, IRecipeAvailable } from 'src/app/interface/recipe.interface';
import { IUser } from 'src/app/interface/user.interface';
import { RecipeService } from 'src/app/service/recipe.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user: IUser = {
    name: "Adhemar",
    email: "adhemar_romero@gmail.com",
    token: "xd"
  }

  welcomeForm: FormGroup = new FormGroup({
    minutes: new FormControl(0, [Validators.min(0), Validators.max(59), Validators.required]),
    seconds: new FormControl(0, [Validators.min(0), Validators.max(59), Validators.required]),
  });

  constructor(
    private readonly router: Router,
    private readonly userService: UserService,
    private readonly recipeService: RecipeService,
  ) {}

  ngOnInit(): void {
    this.takeUser()
  }

  takeUser() {
    this.userService.user$.subscribe(
      (user) => this.user = user
    )
  }

  handleSubmitWelcomeForm() {
    const isValid = this.welcomeForm.valid

    if(!isValid) {
      alert("ingresa p")
      return
    }

    const minutes = this.welcomeForm.value?.minutes || 0
    const seconds = this.welcomeForm.value?.seconds || 0

    const cookingTime = (minutes * 60) + seconds

    const params: IParamFetchAvailableRecipes = { cookingTime }

    this.recipeService.fetchAvailableRecipes(params)
    this.router.navigate(["/home"])
  }
}
