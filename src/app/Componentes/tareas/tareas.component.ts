import { Component, OnInit} from '@angular/core';
import {LogicTaskService} from '../../Servicios/logic-task.service'
import {Task} from '../../Modelos/InterfaceTask'

@Component({
  selector: 'listado-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  tareas:Task[]
  constructor(
    public servicioDeTareas:LogicTaskService
  ) {
    this.tareas=[]
   }

  ngOnInit() {
    this.tareas = this.servicioDeTareas.obtenerTareas()
  }

}
