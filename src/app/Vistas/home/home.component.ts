import { Component, OnInit } from '@angular/core';
import {LogicTaskService} from "../../Servicios/logic-task.service"
import {StaffService} from "../../Servicios/staff.service"




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public servicioDeTareas:LogicTaskService,
    public servicioDeStaff:StaffService

  ) { }

  ngOnInit() {
    this.servicioDeStaff.cargando=true
  }

}
