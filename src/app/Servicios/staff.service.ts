import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  staff:any
  cargando:boolean
  constructor(private http:HttpClient) {
    this.staff=[]
    this.cargando=true
   }

   obtenerEquipo(){
    this.http.get("https://jsonplaceholder.typicode.com/users")
    .subscribe(data=>{
      this.staff=data
      this.cargando=false

    })
   }
}
