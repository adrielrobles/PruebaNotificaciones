import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
  rutaApi = "https://rest-api-angular-php--parzibyte.repl.co";

  constructor(private http: HttpClient) {}

  obtener(model: string[]) {
    console.log(model);
    return this.http.get(`${this.rutaApi}/obtenerPersonas.php`);
  }

}
