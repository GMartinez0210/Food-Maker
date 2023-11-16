// recetas.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {
  private baseUrl = 'http://localhost:8080/recetat'; 

  constructor(private http: HttpClient, private authService:AuthService) { }

  obtenerRecetasPorTiempo(tiempoPreparacion: number): Observable<any[]> {
    const url = `${this.baseUrl}/${tiempoPreparacion}`;
   
    const { userEmail, userPassword } = this.authService.getUserCredentials()
    const headers = new HttpHeaders({
      'Authorization': `Basic ${btoa(`${userEmail}:${userPassword}`)}`

    });
    return this.http.get<any[]>(url, { headers });
    

  }
}
