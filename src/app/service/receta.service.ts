// recetas.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {
  private baseUrl = 'http://localhost:8080/recetat';  // Ajusta la URL según tu backend

  constructor(private http: HttpClient) { }

  obtenerRecetasPorTiempo(tiempoPreparacion: number): Observable<any[]> {
    const url = `${this.baseUrl}/${tiempoPreparacion}`;
    const headers = new HttpHeaders({
      'Authorization': `Basic ${btoa('abalbin@gmail.com:angelo123')}`
    });
    return this.http.get<any[]>(url, { headers });
  }
}
