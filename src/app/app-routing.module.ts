import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Vistas/about/about.component';
import { HomeComponent } from './Vistas/home/home.component';


const routes: Routes = [
  {path:"About", component:AboutComponent},
  {path:"Home", component:HomeComponent},
  {path: '', redirectTo: '/Home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
