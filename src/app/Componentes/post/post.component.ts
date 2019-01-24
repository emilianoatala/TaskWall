import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../../Modelos/InterfaceTask'
import {LogicTaskService} from '../../Servicios/logic-task.service'

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() tarea: Task
  constructor(
    public servicioDeTareas:LogicTaskService
  ) {

  }

  ngOnInit() {
  }

  escalar(elemento:HTMLTemplateElement,titular:HTMLTemplateElement, description:HTMLTemplateElement){
    if(elemento.style.width=="270px"){
      elemento.style.width="150px"
      elemento.style.height="200px"
      titular.style.fontSize="100%"
      description.style.fontSize="50%"
    }
    else{
      elemento.style.width="270px"
      elemento.style.height="360px"
      titular.style.fontSize="200%"
      description.style.fontSize="100%"
    }
  }

  eliminarTask(tarea:Task){
    this.servicioDeTareas.eliminarTarea(tarea)
  }

}
