import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  {InicioComponent} from './inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {SeverAPIService} from './services/sever-api.service';
import { NombreComponent } from './nombre/nombre.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NombreComponent
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
    
  ],
  providers: [SeverAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
