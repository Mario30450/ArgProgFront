import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  URL = 'https://arg-prog-back.herokuapp.com/Proyectos';


  constructor(private http:HttpClient) { }
public getProyectos(): Observable<Proyectos> {

return this.http.get<Proyectos>(this.URL+'');

}}