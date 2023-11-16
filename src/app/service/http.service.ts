import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url: string = "http://localhost:8080"

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  get<T>(endpoint: string) {
    return this.httpClient.get<T>(`${this.url}${endpoint}`)
  }

  post<T, U>(endpoint: string, params: U,options?:{headers?:HttpHeaders}) {
    return this.httpClient.post<T>(`${this.url}${endpoint}`, params,options)
  }

  patch<T, U>(endpoint: string, params: U) {
    return this.httpClient.patch<T>(`${this.url}${endpoint}`, params)
  }

  delete<T>(endpoint: string) {
    return this.httpClient.delete<T>(`${this.url}${endpoint}`)
  }
}
