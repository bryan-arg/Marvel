import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {SeverAPIService} from '../services/sever-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  title = 'MarvelApp'
  ncomprador='';
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

  New_login(){
    this.router.navigate(['/login']);
  }
}
