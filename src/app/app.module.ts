import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Vistas/about/about.component';
import { NavegacionComponent } from './Componentes/navegacion/navegacion.component';
import { FormularioComponent } from './Componentes/formulario/formulario.component';
import { HomeComponent } from './Vistas/home/home.component';
import { TareasComponent } from './Componentes/tareas/tareas.component';
import { PostComponent } from './Componentes/post/post.component';

import {LogicTaskService} from './Servicios/logic-task.service';
import { PersonaComponent } from './Componentes/persona/persona.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavegacionComponent,
    FormularioComponent,
    HomeComponent,
    TareasComponent,
    PostComponent,
    PersonaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [LogicTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
