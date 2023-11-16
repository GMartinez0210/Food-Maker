import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetasService } from 'src/app/service/receta.service';

@Component({
  selector: 'app-recipe-cards',
  templateUrl: './recipe-cards.component.html',
  styleUrls: ['./recipe-cards.component.css']
})
export class RecipeCardsComponent implements OnInit{
  @Input() receta:any;
  tiempoPreparacion:number=0;
  recetas: any[] = [];
  constructor(private route:ActivatedRoute,private recetaService:RecetasService){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.tiempoPreparacion = +params['tiempoPreparacion'] || 0;
      this.recetaService.obtenerRecetasPorTiempo(this.tiempoPreparacion).subscribe((recetas:any[]) =>{
        this.recetas = recetas;
       
      },
      error =>{
        console.error('Error al obtener las recetas',error)
      });
    })
  }
}
