import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetasService } from 'src/app/service/receta.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  recetas: any[] = [];
  nombreUsuario:String;
  tiempoPreparacion:number=0;


  constructor(
     private route:ActivatedRoute,private recetaService:RecetasService
  ) {  }
  ngOnInit(): void {
    this.nombreUsuario = localStorage.getItem('nombreUsuario') || '';
    
  }

}
