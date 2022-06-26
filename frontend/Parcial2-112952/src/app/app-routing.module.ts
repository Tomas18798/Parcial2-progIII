import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaFormComponent } from './persona-form/persona-form.component';
import { PersonaComponent } from './persona/persona.component';

const routes: Routes = [
  {path : "persona" , component : PersonaComponent},
  {path : "form" , component : PersonaFormComponent},
  {path : "**" , component : PersonaFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
