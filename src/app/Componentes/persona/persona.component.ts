import { Component, OnInit,Input } from '@angular/core';



@Component({
  selector: 'persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})


export class PersonaComponent implements OnInit {
  @Input() persona:any
  constructor() { }

  ngOnInit() {
  }

}
