import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  
  nombreUsuario:String;
  tiempoPreparacion:number;
  constructor(
    private readonly userService: UserService, private route:ActivatedRoute, private router:Router
  ) {
  
  }
  ngOnInit(): void {
      this.nombreUsuario = localStorage.getItem('nombreUsuario') || '';
  }

  confirmarTiempo(){
    this.router.navigate(['/home'],{queryParams: { tiempoPreparacion: this.tiempoPreparacion }});
    console.log(this.tiempoPreparacion)
  }
}
