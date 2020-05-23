import { Component, OnInit } from '@angular/core';
import { SeverAPIService } from '../services/sever-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-busqueda',
  templateUrl: './nav-busqueda.component.html',
  styleUrls: ['./nav-busqueda.component.scss']
})
export class NavBusquedaComponent implements OnInit {

  


  constructor(private api: SeverAPIService, private router: Router ){}

  ngOnInit(): void {
  }

New_Inicio(){
  this.router.navigate(['/otr']);
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
