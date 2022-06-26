import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../Interfaces/Persona';
import { PersonaProvider } from '../Services/PersonaProvider';

@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.css']
})
export class PersonaFormComponent implements OnInit {

  id?: number;
  nombre?: string;
  apellido?: string;
  dni?: string;
  direccion?: string;


  constructor(private PersonaProvider: PersonaProvider, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate() {
    if (this.nombre == null || this.nombre == '') { alert("Nombre requerido"); return; }
    if (this.apellido == null || this.apellido == '') { alert("Apellido requerido"); return; }
    if (this.dni == null || this.dni == '') { alert("Dni requerido, no puede ser 0"); return; }
    if (this.direccion == null || this.direccion == '') { alert("Direccion requerida"); return; }

    this.PersonaProvider.create(this.nombre, this.apellido, this.dni, this.direccion).subscribe({
      next: (response: Persona) => {
        alert("Persona insertada correctamente");
        console.log(response);
        this.router.navigate(["persona"]);
      },
      error: (error) => console.error(error),
      complete: () => console.info('complete')
    })

  }

  onCancel() {
    this.router.navigate(["persona"])
  }


}


