import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SeverAPIService} from '../services/sever-api.service';
import { constants } from 'buffer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  superH: any[] =[];
  superH2: any []=[];
  superH3: any []=[];

  constructor(private api: SeverAPIService, private router: Router) { }

  ngOnInit(): void {
   
  }


  obtenerapi(){
    this.api.getMarvel().subscribe(data=>{
       
      this.superH = data['data'];
      this.superH2 = this.superH['results'];
      
      console.log(this.superH2);
    });
  
    
  }
  Navegar_Inicio(){
    this.router.navigate(['/inicio']);
  }




}
