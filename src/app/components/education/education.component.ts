import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educacion:Educacion = new Educacion ('','','');


  constructor(public educationService: EducacionService) { }





  ngOnInit(): void {

    this.educationService.getEducacion().subscribe(data => {
      console.log(data);
      this.educacion=data;
    });


  }

}
