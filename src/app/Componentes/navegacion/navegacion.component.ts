import { Component, OnInit } from '@angular/core';
import { elementContainerEnd } from '@angular/core/src/render3';

@Component({
  selector: 'navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  oculto:boolean
  constructor() {
    this.oculto=true
  }

  ngOnInit() {
  }
menu(elemento:HTMLTemplateElement){
  if (this.oculto==false){
    elemento.style.color="white"
    elemento.innerHTML="close"
  }
  else{
    elemento.style.color="black"
    elemento.innerHTML="menu"
  }
}
}
