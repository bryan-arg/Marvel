import { Component, OnInit } from '@angular/core';
import { Router, provideRoutes } from '@angular/router';
import { SeverAPIService } from '../services/sever-api.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  providers: [SeverAPIService],
})
export class RegistroComponent implements OnInit {

  name ='';
  documento ='';
  id='';
  telefono='';
  direccion='';

  constructor(private api: SeverAPIService,private router: Router) { }

  ngOnInit(): void {
  }




  dateUser: Object;
  user='';

  
  obtenerUser(){
    this.api.getUsers().subscribe(data=>{
      
      this.dateUser=data;
      
      console.log(this.dateUser);
    }

    )
  }

  save(name,documento,telefono,direccion,id){
    const us=
    {
      id: this.id,
      nombre : this.name,
      telefono: this.telefono,
      documento: this.documento,
     
      direccion: this.direccion
    }
    this.api.saveUsers(us).subscribe(data => {
      console.log(data);
    })
    
    console.log('Valor Autor---->>>', this.id);
    console.log('Valor Libro---->>>',this.name);
    
    console.log('Valor Autor---->>>', this.documento);
    console.log('Valor Libro---->>>',this.telefono);
    console.log('Valor Libro---->>>',this.direccion);
    this.router.navigate(['/inicio']);
  }

}
