import { Component, OnInit } from '@angular/core';
import { Persona } from '../Interfaces/Persona';
import { PersonaProvider } from '../Services/PersonaProvider';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  personas? : Persona[];

  constructor(private PersonaProvider:PersonaProvider) { }

  ngOnInit(): void {
    this.PersonaProvider.getAll().subscribe({
      next:(response: Persona[])=> {this.personas=response;console.log(this.personas)},
      error: (error)=> console.log(error),
      complete:() => console.log("llamada completada")  
    });

  }

}
