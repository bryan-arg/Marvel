import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import {NombreComponent} from './nombre/nombre.component';


const routes: Routes = [
  
  
  {path: 'login', component:  LoginComponent},

  {path: 'inicio', component:  AppComponent},

  
  {path: 'otr', component:  InicioComponent},

  {path: 'nombre', component:  NombreComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
