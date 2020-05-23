import { Component, OnInit, ViewChild, Output, Input } from '@angular/core';
import { Router, provideRoutes } from '@angular/router';
import {SeverAPIService} from '../services/sever-api.service';
import { constants } from 'buffer';
import {NavInicialComponent} from '../nav-inicial/nav-inicial.component'
import { EventEmitter } from 'protractor';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [SeverAPIService],
 
})
export class LoginComponent implements OnInit {


  nameU: any[] =[];
  nameUser='' ;
  doc='' ;
  dateUser: Object;
  user='';
usuario ='';
docu='';

@Input() cambioUser: string;


  constructor(private api: SeverAPIService, private router: Router) { }
 
  ngOnInit(): void {
    
    this.obtenerUser();
    
   
  }
  

  obtenerUser(){
    this.api.getUsers().subscribe(data=>{
      
      this.dateUser=data;
     
      
      console.log(this.dateUser);
   
     
    }

    )
  }
  buscarusua(usuario,docu){

    usuario: this.usuario;
   
    
    for(let i in this.dateUser){
      this.nameU=this.dateUser[i];
      this.nameUser=this.nameU['nombre'];
      this.doc=this.nameU['documento'];
      console.log(this.nameUser);
      console.log(this.doc);
    if( this.nameUser==usuario && this.doc==docu){
      console.log('Logueado');
      this.cambioUser=this.nameUser;
      this.api.setToken(this.cambioUser);
     this.Navegar_Inicio();
    }
  }

  }

  

  Navegar_Inicio(){
    this.router.navigate(['/']);
  }

Logueo(){
  
}

 



}
