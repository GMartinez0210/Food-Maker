import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url: string = environment.API_BACKEND

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  get<T>(endpoint: string) {
    return this.httpClient.get<T>(`${this.url}${endpoint}`)
  }

  post<T, U>(endpoint: string, params: U) {
    return this.httpClient.post<T>(`${this.url}${endpoint}`, params)
  }

  patch<T, U>(endpoint: string, params: U) {
    return this.httpClient.patch<T>(`${this.url}${endpoint}`, params)
  }

  delete<T>(endpoint: string) {
    return this.httpClient.delete<T>(`${this.url}${endpoint}`)
  }
}
