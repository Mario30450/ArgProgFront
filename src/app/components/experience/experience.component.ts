import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {


  experiencia:Experiencia = new Experiencia ('','','');


  constructor(public experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.experienciaService.getPersona().subscribe(data => {
    console.log(data);
    this.experiencia=data;
  });
  }




}