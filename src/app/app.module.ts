import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioPrincipalComponent } from './components/inicio-principal/inicio-principal.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { AppRoutingModule } from './app-routing.module';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { CertificacionesComponent } from './components/certificaciones/certificaciones.component';
import { ContactoComponent } from './components/contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioPrincipalComponent,
    ProyectosComponent,
    PresentacionComponent,
    CertificacionesComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
