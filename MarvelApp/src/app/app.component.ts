import { Component, Output, EventEmitter } from '@angular/core';
import {SeverAPIService} from './services/sever-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MarvelApp'
  ncomprador='';
  superH: any[] =[];
  superH2: any []=[];
  superH3: any []=[];


  constructor(private api: SeverAPIService, private router: Router ){}

  save(){
    console.log('valor', this.ncomprador);
  }

obtenerapi(){
  this.api.getMarvel().subscribe(data=>{
     
    this.superH = data['data'];
    this.superH2 = this.superH['results'];
    
    console.log(this.superH2);

   
  });

  
}



New_Inicio(){
  this.router.navigate(['/otr']);
}

New_login(){
  this.router.navigate(['/login']);
}


Por_Nombre(){
  this.router.navigate(['/nombre']);
}

}
