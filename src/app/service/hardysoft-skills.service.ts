import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HardySoft_skills } from '../model/HardySoft_skills.model';

@Injectable({
  providedIn: 'root'
})
export class HardysoftSkillsService {
getHardySoft_skills() {
  throw new Error('Method not implemented.');
}

  
URL = 'https://arg-prog-back.herokuapp.com/HardySoft_skills';


constructor(private http:HttpClient) { }
public getPersona(): Observable<HardySoft_skills> {

return this.http.get<HardySoft_skills>(this.URL+'');

}}