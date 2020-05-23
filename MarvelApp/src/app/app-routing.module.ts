import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import {RegistroComponent} from './registro/registro.component';
import {NavBusquedaComponent} from './nav-busqueda/nav-busqueda.component';
import { AutorComponent } from './autor/autor.component';


 

const routes: Routes = [
  
  {path: "", component: NavBusquedaComponent},
  
  {path: 'login', component:  LoginComponent},

  {path: 'inicio', component:  InicioComponent},

  
  {path: 'otr', component:  InicioComponent},
  {path: 'autor', component:  AutorComponent},
  

  {path: 'registro', component:  RegistroComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
