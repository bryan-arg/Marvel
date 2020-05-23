import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  {InicioComponent} from './inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {SeverAPIService} from './services/sever-api.service';
import { NombreComponent } from './user/nombre/nombre.component';
import {LoginComponent} from './login/login.component';
import {RegistroComponent} from './registro/registro.component';
import { NavInicialComponent } from './nav-inicial/nav-inicial.component';
import { NavBusquedaComponent } from './nav-busqueda/nav-busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NombreComponent,
    LoginComponent,
    RegistroComponent,
    NavInicialComponent,
    NavBusquedaComponent
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [SeverAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
