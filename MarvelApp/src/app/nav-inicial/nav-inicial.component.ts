import { Component, OnInit, Input } from '@angular/core';
import { SeverAPIService } from '../services/sever-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-inicial',
  templateUrl: './nav-inicial.component.html',
  styleUrls: ['./nav-inicial.component.scss']
})
export class NavInicialComponent implements OnInit {
 dataS:string= '';
 
 token='';
  constructor(private api: SeverAPIService, private router: Router ){}
  ngOnInit(): void {
    
    
    this.getUserLogged();
    console.log(this.token);
    

  }
 

  getUserLogged() {
    this.token=this.api.getToken();
      console.log(this.token);
  
  }


New_Inicio(){
  this.router.navigate(['/']);
}

New_login(){
  this.router.navigate(['/login']);
}

New_Regist(){
  this.router.navigate(['/registro']);
}

Por_Nombre(){
  this.router.navigate(['/inicio']);
}


}
