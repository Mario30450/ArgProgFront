import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  http: any;

  constructor(private Http:HttpClientModule) { }
  obtenerDatos(): Observable<any> {return this.http.get('https://arg-prog-back.herokuapp.com/') }
}
