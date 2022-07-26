import { Component, OnInit } from '@angular/core';

declare const exampleModal: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void { exampleModal() 
   
    }

    


}


