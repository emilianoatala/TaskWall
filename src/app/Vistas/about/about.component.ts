import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/Servicios/staff.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(
    public servicioDeStaff:StaffService
  ) {

   }

  ngOnInit() {
    this.servicioDeStaff.obtenerEquipo()

  }

}
