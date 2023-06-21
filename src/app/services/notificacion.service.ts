import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
const httpOptions = {
   headers : new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})


export class NotificacionService {
  rutaApi = "api/Pruebanotificacion/prueba";

  constructor(private http: HttpClient) {}

  obtener(model: string[]) {
    console.log(model);
    return this.http.post(this.rutaApi, model, httpOptions);
  }

}
