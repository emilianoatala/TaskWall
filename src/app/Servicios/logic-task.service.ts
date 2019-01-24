import { Injectable } from '@angular/core';
import {Task} from '../Modelos/InterfaceTask'


@Injectable({
  providedIn: 'root'
})
export class LogicTaskService {
  tareas:Task[];
  interruptor:boolean;
  constructor() {
    this.tareas=[],
    this.interruptor=false
   }
   añadirTarea(titulo, descripcion, urgencia){
    this.tareas.push({titulo:titulo, descripcion:descripcion ,urgente:urgencia})
    localStorage.setItem("task", JSON.stringify(this.tareas))
    this.interruptor=false
   }

   obtenerTareas(){
    if (JSON.parse(localStorage.getItem("task")) === null){
      return this.tareas
     }
     else{
       this.tareas = JSON.parse(localStorage.getItem("task"))
       return this.tareas
     }
   }

   eliminarTarea(task:Task){
    this.tareas.forEach(tarea => {
      if(tarea==task){
        this.tareas.splice(this.tareas.indexOf(tarea), 1);
        localStorage.setItem("task", JSON.stringify(this.tareas))
      }
    });
  }
  escalar(elemento:HTMLTemplateElement){
    if(this.interruptor == false){
      elemento.style.width="150px"
      elemento.style.height="200px"
    }
    else{
      elemento.style.width="270px"
      elemento.style.height="360px"
    }
  }
}
