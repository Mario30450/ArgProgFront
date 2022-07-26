import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {


  URL = 'https://arg-prog-back.herokuapp.com/Educacion';


  constructor(private http:HttpClient) { }
public getEducacion(): Observable<Educacion> {

return this.http.get<Educacion>(this.URL+'');
}
}