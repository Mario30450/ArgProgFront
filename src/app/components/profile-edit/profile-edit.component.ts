import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  persona:Persona = new Persona ("","","","","","","","","",);
id: number = 1;
nombre: String = "";

form:FormGroup;
  constructor(public personaService: PersonaService) {
    this.form=new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(0), Validators.pattern("\(?!\\s).+")]) 
    });
   }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {
    console.log(data);
    this.persona=data[0];
   
   
    console.log(this.id)
  });

  }
get Nombre(){
  return this.form.get('nombre');
} 
onSent(event:Event){
  event.preventDefault;
console.log(this.id);
  this.personaService.editPersona(this.id, this.form.value).subscribe();
}


}
