import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  user: any = {
    nombre: "Adhemars"
  }
  nombre:''
  constructor(
    private readonly userService: UserService, private route:ActivatedRoute
  ) {
    this.route.params.subscribe((params)=>{
      this.nombre=params['nombre'];
    });
  }

  takeUser() {
    this.userService.user$.subscribe(
      (user) => this.user = user
    )
  }

  getUser() {
    this.userService.findOne()
  }
}
