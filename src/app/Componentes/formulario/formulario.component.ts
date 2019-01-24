import { Component, OnInit} from '@angular/core';
import {LogicTaskService} from "../../Servicios/logic-task.service"


@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(
    public servicioDeTareas:LogicTaskService
  ) {

   }

  ngOnInit() {

  }


  addTarea(input1:HTMLInputElement, input2:HTMLInputElement , checkbox:HTMLInputElement){
    if( input1.value=="" || input2.value==""){
      alert("No ha introducido ningun valor")
    }
    else if(checkbox.checked){
      this.servicioDeTareas.añadirTarea(input1.value, input2.value, true)
    }
    else{
      this.servicioDeTareas.añadirTarea(input1.value, input2.value, false)
    }
  }
  urgencia(input:HTMLInputElement, label:HTMLInputElement){
    if(input.checked){
      label.style.color="#fff176"
    }
    else{
      label.style.color=""
    }
  }

}
