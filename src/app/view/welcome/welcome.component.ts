import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  user: any = {
    name: "Adhemar"
  }

  constructor(
    private readonly userService: UserService
  ) {}

  takeUser() {
    this.userService.user$.subscribe(
      (user) => this.user = user
    )
  }

  getUser() {
    this.userService.findOne()
  }
}
