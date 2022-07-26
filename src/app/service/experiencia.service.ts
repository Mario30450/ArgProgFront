import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  URL = 'https://arg-prog-back.herokuapp.com/Experiencia';


  constructor(private http:HttpClient) { }
public getPersona(): Observable<Experiencia> {

return this.http.get<Experiencia>(this.URL+'');

}}