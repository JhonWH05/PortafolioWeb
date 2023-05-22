import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { CertificacionesComponent } from './components/certificaciones/certificaciones.component';
import { ContactoComponent } from './components/contacto/contacto.component';



const routes: Routes = [
  { path: '', component: PresentacionComponent }, // Ejemplo de ruta
  { path: 'proyectos', component: ProyectosComponent }, // Ejemplo de ruta
  { path: 'certificaciones', component: CertificacionesComponent }, // Ejemplo de ruta
  { path: 'contacto', component: ContactoComponent }, // Ejemplo de ruta
  // Otras rutas...
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
