import { Component, OnInit } from '@angular/core';
import { HardySoft_skills } from 'src/app/model/HardySoft_skills.model';
import {HardysoftSkillsService} from 'src/app/service/hardysoft-skills.service';


@Component({
  selector: 'app-hardsoftskills',
  templateUrl: './hardsoftskills.component.html',
  styleUrls: ['./hardsoftskills.component.css']
})
export class HardsoftskillsComponent implements OnInit {


  hardySoft_skills:HardySoft_skills = new HardySoft_skills ('','','');


  constructor(public hardysoftSkillsService: HardysoftSkillsService) { }

  ngOnInit(): void {
    this.hardysoftSkillsService.getPersona().subscribe((data) => {
    console.log(data);
    this.hardySoft_skills=data;
  });
  }

}
